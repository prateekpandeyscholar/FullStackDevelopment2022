
const express=require('express');
const app=express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.get("/product",(req,res,next)=>{
    console.log("inside product");
    res.send("<html><form method='GET' action='/newproduct'> <input type='text' name='text1'/> <input type='submit' value='click'/> </form></html>");
 })

app.get("/newproduct",(req,res,next)=>{
    console.log(req.query.text1); //req.body.text1 in case of post
    res.redirect("/");
})
app.get('/',(req,res,next)=>{
    console.log("finished");
})

app.listen(3000);