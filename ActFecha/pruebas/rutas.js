const express=require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    const now = new Date();
    res.send(`Fecha y hora: ${now}`);
    
});

router.get("/home",(req,res)=>{
    res.send("Estas en home");
});

module.exports=router;