const express=require("express")
require("dotenv").config()
 const app=express()
const cookieParser=require("cookie-parser")



 const blogRoute=require("./routes/blogRoute")
 const userRoute= require("./routes/userRoute")


require("./model/index") 
//telling node to set its view engine to ejs
app.set("view engine","ejs")
app.use(cookieParser())

app.use(express.urlencoded({extended : true})) //imp for every file to get data from html form
//app.use(express.json())----imp one
app.use(express.static("./uploads/"))
app.use(express.static(__dirname +'/public/style'))
app.use((req, res, next) => {
    res.locals.isAuthenticated = !!req.cookies.token;
    next();
});
app.use("/",blogRoute)
app.use("/",userRoute)




app.listen(process.env.PORT || 3002,()=>{
    console.log(`Node js has started at port ${process.env.PORT || 3002}`)
})