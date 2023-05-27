const express = require("express");
const router = express.Router();


const {
	getAllBlogs,
	getAllUsers,
	createBlogs,
	createUsers,
	getBlogById,
	updateBlog,
	deleteBlog,
} = require("../controllers/BlogController");




router.route("/").get(getAllUsers);
router.route("/user").post(createUsers);

router.route("/blog").get(getAllBlogs).post(createBlogs);

router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);


module.exports = router;