const express=require("express")
const app=express()
require("./model/index")
//telling node to set its view engine to ejs

app.set("view engine","ejs")

app.use(express.urlencoded({extended : true})) //imp for every file to get data from html form
//app.use(express.json())----imp one
app.get("/",(req,res)=>{
    res.render("home")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/addBlog",(req,res)=>{
    res.render("addBlog")
})

app.post("/addBlog",(req,res)=>{
    console.log(req.body);
})

const PORT=2000;
app.listen(PORT,()=>{
    console.log(`Node js has started at port ${PORT}`)
})