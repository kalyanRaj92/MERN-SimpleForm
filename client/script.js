let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let mobileNoEl = document.getElementById("mobileNo");
let mobileNoErrMsgEl = document.getElementById("mobileNoErrMsg");

let genderMaleEl = document.getElementById("genderMale");
let genderFemaleEl = document.getElementById("genderFemale");

let myFormEl = document.getElementById("myForm");

nameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }

    formData.name = event.target.value;
});

emailEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }

    formData.email = event.target.value;
});

mobileNoEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        mobileNoErrMsgEl.textContent = "Required*";
    } else {
        // Remove any non-digit characters from the input
        const number = event.target.value.replace(/\D/g, '');

        // Check if the number has exactly 10 digits
        if(number.length !== 10){
            mobileNoErrMsgEl.textContent = "Please enter a 10-digit number";
        }else{
            mobileNoErrMsgEl.textContent = "";
        }
    }

    formData.mobileNo = event.target.value;
});

genderMaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});

genderFemaleEl.addEventListener("change", (event) => {
    formData.gender = event.target.value;
});


function validateFormData(formData){
    let {
        name,
        email,
        mobileNo
    } = formData;


    if (name === "") {
        nameErrMsgEl.textContent = "Required*";
    }
    if (email === "") {
        emailErrMsgEl.textContent = "Required*";
    }
    if (mobileNo === "") {
        mobileNoErrMsgEl.textContent = "Required*";
    }

    // Check if any error messages are present
    if (nameErrMsgEl.textContent || emailErrMsgEl.textContent || mobileNoErrMsgEl.textContent) {
        return false; // Validation failed
    }

    return true; // Validation successful
}


function submitFormData(formData){
    //console.log(formData);

    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(formData)
    };

    let url = "http://localhost:3000/submitFormData";

    fetch(url, options)
    .then((res) => {
        console.log(res, "Form Submitted Successfully!");
    })
    .catch((err)=>{
        console.log("submitting form Error:",err.message);
    })

    // Clear form inputs and reset form data after successful submission
    nameEl.value = "";
    emailEl.value = "";
    mobileNoEl.value = "";
}


let formData = {
    name: "",
    email: "",
    mobileNo:"",
    gender: "male"
};

myFormEl.addEventListener('submit', (event) =>{
    event.preventDefault();
    if (validateFormData(formData)) {
        submitFormData(formData);
    }
})