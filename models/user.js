const mongoose = require("mongoose");

const userSchema = mongoose.schema({
	name: {
		type: string,
		require: true
	},

	age: {
		type: number,
		require: true
	},

	email: {
		type: string,
		require: true
	}

})


module.exports = mongoose.model('User', userSchema);