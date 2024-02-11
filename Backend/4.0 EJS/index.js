import express from "express";
const app= express();
const port=3000;

app.get("/",(req,res)=>{

    const today=new Date();//"june 20 ,2024 12:20:00"
    const day=today.getDay();
    console.log(day);

    let daytype="a weekday";
    let adv="it's time to work hard";
    if(day==0 || day==6)
    {
        daytype="weekend";
    adv="it's time to have some fun";
    }
    else
    {
        daytype="a weekday";
    adv="it's time to work consistant";
    }


    res.render("index.ejs",{
        dayType:daytype ,
        advice:adv

});
});
app.listen(port,()=>{
    console.log(`Server is listening at ${port}`);
});