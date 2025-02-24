const { users } = require("../../model/index");
//console.log("user model: ",users)

const bcrypt=require("bcryptjs")

const jwt=require("jsonwebtoken")
exports.registerPage=(req,res)=>{
    res.render("register")
 }

 exports.registerUser =async(req,res)=>{
    console.log(req.body)
    const {username,email,password}=req.body
   await users.create({
        username:username,
        email:email,
        password:bcrypt.hashSync(password,12)
    })
    res.redirect("/login")
}

exports.renderLoginForm=(req,res)=>{
res.render("login")
}
exports.loginUser=async(req,res)=>{
    const {email,password}=req.body
    if(!email || !password){
        return res.send("plz provide details") 
        }  
      const user= await  users.findAll({
            where:{
                email:email
            }
        })
        if(user.length==0){
            res.send("no user exist with that email")
        }
        else{
            //tyo email ko user cha
           const isMatched=  bcrypt.compareSync(password,user[0].password)
        if(isMatched){
            var token=jwt.sign({id:user[0].id},process.env.secretKey,{
                expiresIn:"1d"
               
            })
            res.cookie('token',token)
            res.send(console.log("login success"))
        }

        else{
            res.send("password not matched")
        }
        
        }
    } 