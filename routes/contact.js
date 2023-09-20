const express = require('express');
const contact = express.Router();
const {createContact, getContact, updateContact, deleteContact,getAContact} = require('../controllers/contactOps');

contact.post("/create",createContact);

contact.get("/",getContact);

contact.get("/:id",getAContact);

contact.delete("/:id",deleteContact);

contact.put("/:id",updateContact);

module.exports  = contact;