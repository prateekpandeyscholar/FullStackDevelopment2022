let err;
function transact(title,callback){
    let rand=Math.floor(Math.random()*100);
    if(title.toUpperCase()!=title)
      err=new Error("Not in Uppercase");
    setTimeout(()=>{callback(err)},rand);
}

transact("DEALER",function(err){
    if(err)
        console.log(err);
    else{
        console.log("DEALER has done transaction");
        transact("RETAILER",function(err){
            if(err)
                console.log(err);
            else{
                console.log("RETAILER has done transaction");
            }
        })
    }

})

