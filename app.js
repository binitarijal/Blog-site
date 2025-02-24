const express=require("express")
require("dotenv").config()
 const app=express()
const cookieParser=require("cookie-parser")
 const blogRoute=require("./routes/blogRoute")
 const userRoute= require("./routes/userRoute")


require("./model/index") 
//telling node to set its view engine to ejs
app.set("view engine","ejs")

app.use(express.urlencoded({extended : true})) //imp for every file to get data from html form
//app.use(express.json())----imp one
app.use(express.static("./uploads/"))
app.use(express.static(__dirname +'/public/style'))
app.use("",blogRoute)
app.use("",userRoute)
app.use(cookieParser())


const PORT=2000;
app.listen(PORT,()=>{
    console.log(`Node js has started at port ${PORT}`)
})