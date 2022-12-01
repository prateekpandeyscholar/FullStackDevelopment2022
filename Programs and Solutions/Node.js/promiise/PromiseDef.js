 let cleanRoom=new Promise((resolve,reject)=>{
    let isClean=true;
    if(isClean)
      resolve("Room Clean");
    else 
      reject("Room Unclean");
})

cleanRoom
.then((fromResolve)=>{
   console.log(fromResolve);
})
.catch((fromReject)=>{
    console.log(fromReject);
})