const mongoose = require("mongoose");

const connect = async() =>{
    try {
        await mongoose.connect("mongodb+srv://princeleogaming:princeleo@contactform.70v7p.mongodb.net/contactForm")
        .then (
            ()=>{
                console.log("Connected");
            },
        (error) => {
            console.log(error);
        }
              );
    } catch (error) {
        console.log("error");
        
    }
}

connect();