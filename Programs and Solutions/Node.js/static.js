const express=require('express');
const app=express();
const path=require('path');
app.use(express.static(path.join(__dirname,"css")));
app.use('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"req.html"));
})

app.listen(3000);