let err;
function transact(name){
    return new Promise((resolve,reject)=>{
        if(name.toUpperCase()!=name)
           reject("Name not in Uppercase");
        let rand=Math.floor(Math.random()*100);
        setTimeout(()=>{resolve(name)},rand);
    })
}
    
transact("DEALER")
.then((fromResolve)=>{
    console.log(`${fromResolve} has done transaction`);
    return transact("RETAILER");
})
.then((fromResolve)=>{
    console.log(`${fromResolve} has done transaction`);
    
})
.catch((fromReject)=>{
    console.log(fromReject);
})