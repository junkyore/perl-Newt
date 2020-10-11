const express = require('express');
const mongoose = require('mongoose');
const cryptoRoute = require('./routes/crypto.route');
require('dotenv').config();
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.DB_MONGO, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
mongoose.connection
	.once('open', () => {
		console.log('DB connected');
	})
	.on('error', () => {
		console.log('error');
	});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/', cryptoRoute);

app.listen(PORT, () => {
	console.log(`Running on port ${PORT}`);
});
