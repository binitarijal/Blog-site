const express=require("express")
const app=express()
require("./model/index")
//telling node to set its view engine to ejs

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("home")
})
app.get("/about",(req,res)=>{
    res.render("about")
})

const PORT=2000;
app.listen(PORT,()=>{
    console.log(`Node js has started at port ${PORT}`)
})