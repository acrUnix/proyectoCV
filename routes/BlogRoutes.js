const express = require("express");
const router = express.Router();

const { registerPost, registerGet  } = require("../AuthUser/auth.js");
const {
	getAllBlogs,
	getAllUsers,
	createBlogs,
	createUsers,
	getBlogById,
	updateBlog,
	deleteBlog
} = require("../controllers/BlogController.js");





router.route("/").get(getAllUsers);
router.route("/user").post(createUsers);
router.route("/register").get(registerGet).post(registerPost);

router.route("/blog").get(getAllBlogs).post(createBlogs);

router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);


module.exports = router;