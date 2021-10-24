const { PrismaClient } = require('@prisma/client');
const logger = require('../utilities/logger');
const prisma = new PrismaClient();
const adminAuth = async (req, res, next) => {
	logger.indo(`starting adminAuth middleware`);
	if (!req.user) {
		logger.error('There is no user');
		return res.status(400).json({ err: 'There is no user' });
	}
	const userById = await prisma.users.findUnique({
		where: {
			id: parseInt(req.user?.id),
		},
	});

	if (!userById) {
		logger.error(`No user found with id: ${req.user.id}`);
		return res.status(400).json({ err: 'There is no user in database' });
	}
	//TO DO : SPLIT ADMIN OAUTH
	if (userById?.role === 'admin') {
		req.users = await prisma.users.findMany();
		return next();
	} else if (userById.id === parseInt(req.params?.userId)) {
		req.users = userById;
		return next();
	} else {
		return res.status(401).json({ err: 'No Role Premmision' });
	}
};

module.exports = {
	adminAuth,
};
