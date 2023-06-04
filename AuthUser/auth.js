// auth.js

const User = require("../models/users.js");



exports.registerGet = async (req, res) => {

    try{
      const users = await User.find();
      res.status(200).render("registro", {title: "Pagina de registro", users: users});
  
    }catch (err){
    res.status(500).json({error: err.message});
  }
  }
  



exports.registerPost = async (req, res) => {

    const { username, password, mail, role } = req.body;
    if (password.length < 6) {
      return res.status(400).json({ message: "Password less than 6 characters" })
    }
    try {
      await User.create({
        username,
        password,
        mail,
        role
      }).then(async ()=>{
        const users = await User.find();
        res.status(200).render("registro", {users: users});
      })

    } catch (err) {
      res.status(401).json({
        message: "User not successful created",
        error: err.message
      })
    }
  }
  



  exports.login = async (req, res, next) => {
  
    const { username, password } = req.body
    // Check if username and password is provided
    if (!username || !password) {
      return res.status(400).json({
        message: "Username or Password not present",
      })
    }

    try {
      const user = await User.findOne({ username, password })
      if (!user) {
        res.status(401).json({
          message: "Login not successful",
          error: "User not found",
        })
      } else {
        res.status(200).json({
          message: "Login successful",
          user,
        })
      }
    } catch (error) {
      res.status(400).json({
        message: "An error occurred",
        error: error.message,
      })
    }
  }