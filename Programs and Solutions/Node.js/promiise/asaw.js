let x=0;
async function transact(){
    var promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{x++; resolve()},1000)
    });
    await promise;
    console.log(x);
}

transact();