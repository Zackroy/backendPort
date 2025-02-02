const mongoose = require("mongoose");

const contactFormSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true
    }
});

module.exports = mongoose.model(
    "contactForm", contactFormSchema
);