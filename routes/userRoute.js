const { registerPage, registerUser} = require("../controller/user/userController");
//console.log({registerPage,registerUser})
const router=require("express").Router()

router.route('/register').get(registerPage).post(registerUser)

module.exports=router