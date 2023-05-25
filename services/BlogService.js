const BlogModel = require("../models/Blog");
const User = require("../models/users");


exports.getAllBlogs = async () => {
	return await BlogModel.find();
};


exports.getAllUsers = async () => {
	return await User.find({});
};


exports.createBlog = async (blog) => {
	return await BlogModel.create(blog);
};


exports.getBlogById = async (id) => {
	return await BlogModel.findById(id);
};


exports.updateBlog = async (id, blog) => {
	return await BlogModel.findByIdAndUpdate(id, blog);
};


exports.deleteBlog = async (id) => {
	return await BlogModel.findByIdAndDelete(id);
};


