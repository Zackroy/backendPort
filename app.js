const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors({
    origin: '*',
    methods: ["POST"],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token'],
    credentials: true
}));
app.use(express.json());

const contactRoutes = require("./routes/contactFormRoute");
app.use("/api/v1", contactRoutes);

module.exports = app;
