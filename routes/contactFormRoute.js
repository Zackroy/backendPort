const express = require("express");
const { createContact } = require("../controllers/contactController");
const router = express.Router();

router.route("/contactForm").post(createContact);


module.exports = router;