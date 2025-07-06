const { registerPage, registerUser, renderLoginForm,loginUser} = require("../controller/user/userController");
//console.log({registerPage,registerUser})
const router=require("express").Router()

router.route('/register').get(registerPage).post(registerUser)
router.route('/login').get(renderLoginForm).post(loginUser)

router.get('/logout', (req, res) => {
    res.clearCookie('token'); // Clear the JWT cookie
    res.redirect('/login');   // Redirect to login or home
});
module.exports=router