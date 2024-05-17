const express = require('express');
const app = express(); 
const cors = require('cors');
const bodyParser = require('body-parser');

// Middlewares
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(bodyParser.json());

require('./db/connection');

const data = require('./models/user');

//Testing purpose
/*const newData = new data({
    name:"test",
    email:"test@gmail.com",
    mobileNo:"1234567891",
    gender:"male"
}); 

data.insertMany([newData]);

newData.save()*/


// POST Route to Submit Form Data
app.post("/submitFormData", (req,res) => {
    const formData = req.body;
    const registerData = new data({
        name:formData.name,
        email:formData.email,
        mobileNo:formData.mobileNo,
        gender:formData.gender
    })
    registerData.save().then(()=>{
        console.log("Data Saved to formDataDB...")
        res.status(200).send("Data Saved to formDetailsDB");
    }).catch((err)=>{
        console.log(err.message)
        res.status(500).send("Error Saving Data");
    })
});

// GET Route
app.get("/", (req, res) => {
    res.send("Hey KalyanRaj, welcome to MongoDB...");
});

// Server Setup
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
});


