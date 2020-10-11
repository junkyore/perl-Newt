const mongoose = require('mongoose');
const { Schema } = mongoose;

const cryptoSchema = new Schema({
	name: {
		type: String,
	},
});
const Crypto = mongoose.model('cryptos', cryptoSchema);
module.exports = Crypto;
