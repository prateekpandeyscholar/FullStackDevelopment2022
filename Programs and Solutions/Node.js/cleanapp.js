const express=require('express');
const app=express();
const adminRoute=require('./route/admin.js');
const managerRoute=require('./route/manager.js');
app.use('/',(req,res,next)=>{
    console.log("Start");
    next();
})
app.use('/admin',adminRoute);
app.use('/manager',managerRoute);

app.listen(3000);