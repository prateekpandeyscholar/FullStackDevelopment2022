
const express=require('express');
const router=express.Router();
router.get('/login',(req,res)=>{
    res.send("<h1>Admin Authorized");
    console.log("Admin Authorized");
})
module.exports=router;