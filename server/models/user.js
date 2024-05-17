const mongoose = require('mongoose');

// Define Schema
const registerSchema = new mongoose.Schema({
    name:String,
    email:String,
    mobileNo:String,
    gender:String
});

const registerDetails = mongoose.model("formData", registerSchema);

module.exports = registerDetails;