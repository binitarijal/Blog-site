const { homeRender,about,renderBlogPage,addBlog,showBlog,deleteBlog,showBlogPage,updatePage} = require("../controller/blog/blogController");
const{isAuthenticated}=require("../middleware/isAuthenticated")
const {storage, multer}=require("../middleware/multerConfig")
const upload=multer({storage: storage})
const router=require("express").Router()
router.route('/').get(homeRender)
router.route('/about').get(about)
router.route('/addBlog').get(renderBlogPage).post(upload.single('image'),isAuthenticated, addBlog)
router.route('/blog/:id').get(showBlog)
router.route('/deleteblog/:id').get(deleteBlog)
router.route('/updateBlog/:id').get(showBlogPage).post(updatePage)

module.exports=router
