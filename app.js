const express=require("express")

const {blogs}=require("./model/index")
 const {storage, multer}=require("./middleware/multerConfig")
const { homeRender,renderBlogPage, about, addBlog ,showBlog, deleteBlog, showBlogPage, updatePage } = require("./controller/blog/blogController")
 require("dotenv").config()
 const upload=multer({storage: storage})
 const app=express()

//telling node to set its view engine to ejs

app.set("view engine","ejs")

app.use(express.urlencoded({extended : true})) //imp for every file to get data from html form
//app.use(express.json())----imp one
app.get("/",homeRender)
app.get("/about",about)
app.get("/addBlog",renderBlogPage)

app.post("/addBlog",upload.single('image'),addBlog)

app.get("/blog/:id",showBlog)

//deleting

app.get("/deleteblog/:id",deleteBlog)
app.get("/updateBlog/:id",showBlogPage)

app.post("/updateBlog/:id",updatePage)

app.use(express.static("./uploads"))
app.use(express.static(__dirname +'/public/style'))

const PORT=2000;
app.listen(PORT,()=>{
    console.log(`Node js has started at port ${PORT}`)
})