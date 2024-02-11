const fs=require("fs");
fs.writeFile("message.txt","Hello from Nitishda!",(err)=>{
    if(err) throw err;
    console.log("File has been saved!");
});

fs.readFile("./message.txt","utf-8",   (err,data)=>{
    if(err) throw err;
    console.log(data);
});