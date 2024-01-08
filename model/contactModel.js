const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name must be included."]
    },
    email: {
        type: String,
        required: [true, "Email must be entered."]
    },
    phone: {
        type: Number,
        required: [true, "Please enter the phone number."]
    }
}, {
    timestamps: true
});

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
