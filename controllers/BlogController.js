const blogService = require("../services/BlogService");
const User = require("../models/users");
const async = require("async");

const { body, validationResult } = require("express-validator");



exports.getAllBlogs = async (req, res) => {
	try{
		const blogs = await blogService.getAllBlogs();
		res.json({data: blogs, status: "success"});

	}catch (err){
	res.status(500).json({error: err.message});
}
};


exports.getAllUsers = async (req, res) => {
	try{
		const blogs = await blogService.getAllUsers();
		res.send({user: blogs, success: true});

	}catch (err){
	res.status(500).json({error: err.message});
}
};



exports.createBlogs = async (req, res) => {
	try{
		const blog = await blogService.createBlog(req.body);
		res.json({data: blog, status: "success"});

	}catch (err){
	res.status(500).json({error: err.message});
}
};


exports.getBlogById = async (req, res) => {
	try{
		const blog = await blogService.getBlogById(req.params.id);
		res.json({data: blog, status: "success"});

	}catch (err){
	res.status(500).json({error: err.message});
}
};


exports.updateBlog = async (req, res) => {
	try{
		const blog = await blogService.updateBlog(req.params.id, req.body);
		res.json({data: blog, status: "success"});

	}catch (err){
	res.status(500).json({error: err.message});
}
};


exports.deleteBlog = async (req, res) => {
	try{
		const blog = await blogService.deleteBlog(req.params.id);
		res.json({data: blog, status: "success"});

	}catch (err){
	res.status(500).json({error: err.message});
}
};



exports.createUsers = [

	body("name", "Por favor, ingrese su nombre correctamente..")
	.exists()
    .trim()
    .notEmpty()
    .isLength({ min: 1 })
    .escape(),
    body("age", "Por favor, ingrese la edad correctamente..")
    .exists()
    .trim()
    .notEmpty()
    .isInt()
    .isLength({min:1})
    .escape(),
    body("email", "Por favor, ingrese un email correctamente..")
    .exists()
    .trim()
    .notEmpty()
    .isLength({min:1}) 
    .isEmail()
    .escape(),



async(req, res) => {

	   let errors = validationResult(req); 
        if(!errors.isEmpty()){
        console.log(errors.array());
        return res.json({ errors: errors.array(), message: "revise sus datos.."});
    }


  try{


    const {name, age, email} = req.body;


    let user = new User({
      name, age, email,
    })

    await user.save();
    return res.status(200).send({
      success:true,
      message: "usuario creado correctamente..",
    })

  }catch(error){
    return res.status(500).send({
      success:false,
      message: error.message,
    });

  }
  
 
},
];