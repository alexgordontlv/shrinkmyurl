require('dotenv').config();
const jwt = require('jsonwebtoken');

const tokenAuth = (req, res, next) => {
	console.log('token check');
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
	if (!token) return res.status(401).json({ err: 'There is no token' });

	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
		if (err) return res.status(403).json({ err });
		req.user = user;
		next();
	});
};

module.exports = {
	tokenAuth,
};
