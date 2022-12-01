let err;
function transaction(title, callback){
  let random=Math.floor(Math.random()*100);
  if(title.toUpperCase()!=title)
    err=new Error("not in uppercase");
  setTimeout(()=>{callback(err)});
}

transaction("DEALER",(err)=>{
   if(err)
     console.log(err);
   else 
     console.log("DEALER has done transaction");
})

transaction("RETAILER",(err)=>{
   if(err)
     console.log(err);
   else 
     console.log("RETAILER has done transaction");
})