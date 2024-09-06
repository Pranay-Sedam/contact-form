const router = require("express").Router();
const contact = require("../models/contact")
router.post("/post",async(req,res) => {
    try {
        const {name,number,email,state,city,address,message} = req.body;
        const newContact = new contact({name,number,email,state,city,address,message});
        await newContact.save().then(()=>{
            res.status(200).json({message:"Data Saved"});
        }, ()=> {
            res.status(400).json({message:"Data Not Saved"});
        })
    } catch (error) {
        res.status(400).json({message: "Error"});
    }
});

// Route to get all contact data (for admin)
router.get("/all", async (req, res) => {
    try {
        const contacts = await contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(400).json({ message: "Error", error: error.message });
    }

    router.delete("/delete/:id",async (req,res)=> {
        try {
            const {id} = req.params;
            await contact.findByIdAndDelete(id);
            res.status(200).json({message: "Contact deleted successfully"});
        } catch (error) {
            res.status(400).json({ message: "Error deleting contact" });

        }
    })
    
});

module.exports = router;