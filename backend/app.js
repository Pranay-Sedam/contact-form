// const express = require("express");
// const app = express();
// const corse = require("cors")
// const contact =require("./routes/contact")
// const contactRoutes = require("./routes/contact");
// require("./connection/connection");

// app.use(express.json());

// app.use(corse());


// // Use the contact routes
// app.use("/api/con", contactRoutes);

// app.listen(1000, () => {
//     console.log("Server started at port 1000");
// });


// app.use("/api/con",contact);

// app.listen("1000", ()=>{
//     console.log("server Statred at Port 1000");
    
// })
const express = require("express");
const app = express();
const cors = require("cors");
const contactRoutes = require("./routes/contact"); // Import the contact routes
require("./connection/connection"); // Import your database connection

app.use(express.json());
app.use(cors());

// Use the contact routes
app.use("/api/con", contactRoutes);

// Start the server
const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
