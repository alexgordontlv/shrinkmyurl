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
		logger.info(`JWT succeeded `);

		req.tokenizedUser = {
			...req.user,
			token: accessToken,
		};
		logger.info(`Tokenzied user `, req.tokenizedUser);
		next();
	} catch (error) {
		logger.error(`JWT Error`, error);
		res.status(500).send();
	}
};

module.exports = { jasonWebToken };
