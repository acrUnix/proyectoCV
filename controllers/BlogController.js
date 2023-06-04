const blogService = require("../services/BlogService.js");
const User = require("../models/users.js");
const Blog = require("../models/blog.js");

const async = require("async");

const { body, validationResult } = require("express-validator");




exports.getAllUsers = async (req, res) => {

	try{
		const users = await blogService.getAllUsers();
		res.status(200).render("users", {title: "Historias", users: users});

	}catch (err){
	res.status(500).json({error: err.message});
}
};


exports.getAllBlogs = async (req, res) => {
	try{

		const allBlogs = await Blog.find();
		res.status(200).render("blogs", {titulo: "Actualidad", blogs: allBlogs});
		
 
	}catch (err){
	res.status(500).json({error: err.message});
}
};




exports.createBlogs = [

  body("title", "Por favor, ingrese la edad correctamente..")
  .exists()
  .trim()
  .notEmpty()
  .isLength({min:1})
  .escape(),
  body("body", "Por favor, ingrese un email correctamente..")
  .exists()
  .trim()
  .notEmpty()
  .isLength({min:1})
  .escape(),

  async (req, res) => {

    let errors = validationResult(req); 
        if(!errors.isEmpty()){
        console.log(errors.array());
        return res.json({ errors: errors.array(), message: "revise sus datos.."});
    };

	try{

		await blogService.createBlog(req.body);
    
	}catch (err){
	res.status(500).json({error: err.message});

}
},

];



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