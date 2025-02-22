
const { blogs } = require("../../model/index");

exports.homeRender=async(req,res)=>{
    //blogs table bata row nikalnu paryo ani home page lai pass garney
    const blogsTableBlog=await blogs.findAll()
    //console.log(blogsTableBlog)
    res.render("home",{blogs:blogsTableBlog})
}

exports.renderBlogPage=(req,res)=>{
    res.render("addBlog")
}

exports.about =(req,res)=>{
    res.render("about")
}

exports.addBlog=async(req,res)=>{
    console.log(process.env.name)
    console.log(req.body)
    console.log(req.file)

    const {title,subTitle,description}=req.body
    if(!title || !subTitle || !description){
       return res.send("plz give all details and not null values")
    }
  // console.log(title,subTitle,description)
    //inserting into blog

   await blogs.create({
        title:title,
        subTitle:subTitle,
        description:description,
        image:process.env.backendUrl + req.file.filename
    })
    res.redirect("/")
}

exports.showBlog=async(req,res)=>{
    const id=req.params.id
const foundData   =await blogs.findByPk(id)
    res.render("blog",{blog:foundData})
}

exports.deleteBlog=async(req,res)=>{
    const id=req.params.id
   await blogs.destroy({
        where:{
            id:id
        }
    })
    res.redirect("/")
}

exports.showBlogPage=async(req,res)=>{
    const id=req.params.id
    const blog=await blogs.findByPk(id)
    res.render("update",{id:id,blog:blog})
}

exports.updatePage=async(req,res)=>{
    const {id}=req.params
    const {title,subTitle,description}=req.body
  await  blogs.update({
     title:title,
     subTitle:subTitle,
     description:description
    },{
     where:{
         id:id
     }
    })
    res.redirect("/blog/"+id)
 }