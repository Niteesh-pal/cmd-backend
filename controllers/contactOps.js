const contactModel = require('../models/Contact');

const createContact = async(req, res)=>{
        const {name, phone, email} = req.body;

        const newContact = new contactModel({
            name:name,
            phone:phone,
            email:email
        });

        try{
        await newContact.save();
        res.status(201).json(newContact);
        }
        catch(err){
            console.log(err);
            res.status(500).json({"message": "failed to create contact "})
        }

}
const getAContact = async(req, res)=>{
    const id = req.params.id;
    // console.log(id);
    try{
        const getcontact = await contactModel.findById(id);
        console.log(getContact)
        res.status(201).json(getcontact);
    }
    catch(err){
        console.log(err);
        res.status(500).json({"message":"failed to get contact"});
    }
}
const getContact = async(req, res)=>{
        try{
            const contact = await contactModel.find();
            res.status(201).json(contact);
        }
        catch(err){
            console.log(err);
            res.status(500).json({"message": "failed to get contact "})
        }
}
const updateContact = async(req, res)=>{
    const id = req.params.id; 
    const {name, phone, email} = req.body;

    const newContact = {
        name:name,
        phone:parseInt(phone),
        email:email
    }

    try{
            await contactModel.findByIdAndUpdate(id,newContact,{new:true})
            res.status(201).json(newContact);
    }catch(err){

    }

    

}
const deleteContact= async(req, res)=>{
    const id = req.params.id; 
    try{
        await contactModel.findByIdAndRemove(id)
        res.status(201).json({"message":"contact deleted"});
    }
    catch(err){
        console.log(err);
        res.status(500).json({"message":"error in deleting"});
    }
}
module.exports = {createContact, getContact, updateContact, deleteContact,getAContact};