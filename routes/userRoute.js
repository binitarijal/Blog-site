const { registerPage, registerUser, renderLoginForm,loginUser} = require("../controller/user/userController");
//console.log({registerPage,registerUser})
const router=require("express").Router()

router.route('/register').get(registerPage).post(registerUser)
router.route('/login').get(renderLoginForm).post(loginUser)
module.exports=router