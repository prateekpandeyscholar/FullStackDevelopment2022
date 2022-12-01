const http=require('http');
const server=http.createServer((req,res)=>{
                                 console.log(req.method,req.url);
                              }).listen(3000);