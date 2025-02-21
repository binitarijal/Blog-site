const express=require("express")
const app=express()
const {blogs}=require("./model/index")
//telling node to set its view engine to ejs

app.set("view engine","ejs")

app.use(express.urlencoded({extended : true})) //imp for every file to get data from html form
//app.use(express.json())----imp one
app.get("/",async(req,res)=>{
    //blogs table bata row nikalnu paryo ani home page lai pass garney
    const blogsTableBlog=await blogs.findAll()
    console.log(blogsTableBlog)
    res.render("home",{blogs:blogsTableBlog})
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/addBlog",(req,res)=>{
    res.render("addBlog")
})

app.post("/addBlog",async(req,res)=>{
    
    const {title,subTitle,description}=req.body
    if(!title || !subTitle || !description){
       return res.send("plz give all details and not null values")
    }
    console.log(title,subTitle,description)
    //inserting into blog

   await blogs.create({
        title:title,
        subTitle:subTitle,
        description:description
    })
    res.redirect("/")
})

app.get("/blog/:id",async(req,res)=>{
    const id=req.params.id
const foundData   =await blogs.findByPk(id)
    res.render("blog",{blog:foundData})
})

//deleting

app.get("/deleteblog/:id",async(req,res)=>{
    const id=req.params.id
   await blogs.destroy({
        where:{
            id:id
        }
    })
    res.redirect("/")
})
app.get("/updateBlog/:id",(req,res)=>{
    const id=req.params.id
    res.render("update",{id:id})
})

app.post("/updateBlog/:id",async(req,res)=>{
   
})

const PORT=2000;
app.listen(PORT,()=>{
    console.log(`Node js has started at port ${PORT}`)
})