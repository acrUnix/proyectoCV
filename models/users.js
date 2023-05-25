const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { 
    type: String,
    required: true,
    maxLength: [30, 'Por favor, no mas de 30 caracteres'],
    minLength: [1, 'Por favor, ingrese mas de un caracter'],
  },
  age: { 
    type: Number,
    required: true,
    min: [0, 'Por favor, este campo es obligatorio'],
  },

  email: {
    type: String,
    required: true,
  },

});


module.exports = mongoose.model("User", userSchema);