const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { 
    type: String,
    unique: true,
    required: true,
    maxLength: [30, 'Por favor, no mas de 30 caracteres'],
    minLength: [1, 'Por favor, ingrese mas de un caracter']
  },

  password: {
    minLength: 6,
    type: String,
    required: true
  },

  mail: { 
    type: String,
    required: true,
    min: [0, 'Por favor, este campo es obligatorio']
  },


  role: {
    type: String,
    default: "Basic",
    required: true
  }

});


module.exports = mongoose.model("User", userSchema);