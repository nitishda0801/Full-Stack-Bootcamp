import express, { request, response } from "express";
const app=express();
const port=3000;

app.get("/",(request,response)=>{
//console.log(request.rawHeaders);
response.send("<h1>Hello, world!</h1>");
});

app.get("/about",(request,response)=>{
    response.send("<h1>About Me</h1><p>My name is Nitish Kumar</p>");
});

app.get("/contact",(request,response)=>{
    response.send("<h1>Contact Me</h1><p>Phone: +911234567890");
});

app.listen(port,()=>{
    console.log(`server started on port ${port}`);

});