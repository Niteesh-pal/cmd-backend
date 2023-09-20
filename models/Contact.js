const mongoose = require("mongoose");

const contactList =mongoose.Schema({
    name:{
        type: String,
        required:[true, "name is required"]
    },
    phone:{
        type: Number,
        required:[true, "name is required"]
    },
    email:{
        type:String
    }
});

const Contact = mongoose.model("Contact", contactList);

module.exports = Contact;