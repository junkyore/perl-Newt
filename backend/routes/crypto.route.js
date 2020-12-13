const express = require('express');
const router = express.Router();
const Crypto = require('../models/Crypto');

router.get('/api', async (req, res) => {
	try {
		const data = await Crypto.find();
		res.json(data);
	} catch (e) {
		console.log(e);
	}
});
router.post('/add-crypto', async (req, res) => {
	try {
		let crypto = new Crypto(req.body);
		crypto = await crypto.save();
	} catch (e) {
		console.log(e);
	}
});

router.delete('/delete-crypto/:id', async (req, res) => {
	await Crypto.findByIdAndDelete(req.params.id);
});
module.exports = router;
