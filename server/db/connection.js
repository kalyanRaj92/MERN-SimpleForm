const mongoose = require('mongoose');

// MongoDB Connection
mongoose.connect("mongodb://0.0.0.0:27017/myDataBase")
    .then(() => {
        console.log("MongoDB Connected..");
    })
    .catch((err) => {
        console.error("MongoDB Connection Error:", err);
    });