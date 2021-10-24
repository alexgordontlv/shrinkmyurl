const jwt = require('jsonwebtoken');

const jasonWebToken = async (req, res, next) => {
	try {
		const accessToken = await jwt.sign(
			{
				id: req.user.id,
			},
			process.env.ACCESS_TOKEN_SECRET,
			{
				expiresIn: '20m',
			}
		);
		req.tokenizedUser = {
			...req.user,
			token: accessToken,
		};
		next();
	} catch (error) {
		res.status(500).send();
	}
};

module.exports = { jasonWebToken };
