
const jwt=require("jsonwebtoken")
const {promisify}=require("util")
const{users}=require("../model")

exports.isAuthenticated=async (req,res,next)=>{
    const token=req.cookies.token
console.log(token)
if(!token ||token===null || token===undefined){
    return res.redirect("/login")
}

// yedi token ayo vane
const verifyResult=await promisify(jwt.verify)(token,process.env.secretKey)
const user=users.findByPk(verifyResult.id)
if(!user){
    return res.redirect("/login")
}
req.userId=verifyResult.id
next()
}