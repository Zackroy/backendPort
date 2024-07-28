const contactFormModal = require("../models/contactFormModal");
const sendMailUser = require("../utils/sendMail");

exports.createContact = async(req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const description = req.body.description;
    sendMailUser(name, email, description);
    const result = await contactFormModal.create({name:name, email:email, description:description});
    res.status(201).json({
        success:true
    })
}
