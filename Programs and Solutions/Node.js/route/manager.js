const express=require('express');
const router=express.Router();
router.get('/report',(req,res)=>{
    res.send("<h1>Manager Dashboard Ready");
    console.log("Manager Dashboard Ready");
})
module.exports=router;