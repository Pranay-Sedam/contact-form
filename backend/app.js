const express = require("express");
const app = express();
const corse = require("cors")
const contact =require("./routes/contact")
require("./connection/connection");

app.use(express.json());

app.use(corse());


app.use("/api/con",contact);

app.listen("1000", ()=>{
    console.log("server Statred at Port 1000");
    
})