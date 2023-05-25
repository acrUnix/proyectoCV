const express = require("express");
const { body, validationResult } = require("express-validator");


const {
	getAllBlogs,
	getAllUsers,
	createBlogs,
	createUsers,
	getBlogById,
	updateBlog,
	deleteBlog,
} = require("../controllers/BlogController");


const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/user").post(createUsers);

router.route("/").get(getAllBlogs).post(createBlogs);

router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);


module.exports = router;