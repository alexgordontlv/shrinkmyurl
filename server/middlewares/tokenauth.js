require('dotenv').config();
const jwt = require('jsonwebtoken');

const tokenAuth = (req, res, next) => {
	const authHeader = req.headers['authorization'];
	console.log('header', authHeader);
	const token = authHeader && authHeader.split(' ')[1];
	if (!token) res.status(401).send();

	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
		if (err) res.status(403).send();
		req.user = user;
		next();
	});
};

module.exports = {
	tokenAuth,
};
