const jwt = require('jsonwebtoken');
const logger = require('../utilities/logger');

const jasonWebToken = async (req, res, next) => {
	try {
		logger.info(`Starting JWT token for `, req.user.id);
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
		logger.info(`Tokenzied user `, eq.tokenizedUser);
		next();
	} catch (error) {
		res.status(500).send();
	}
};

module.exports = { jasonWebToken };
