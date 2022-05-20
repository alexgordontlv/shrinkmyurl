const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');
const logger = require('../utilities/logger');

const registerUser = async (req, res, next) => {
	const { userName, email, password, role } = req.body;
	try {
		const hashedPassword = await bcrypt.hash(password, 10);
		const result = await prisma.users.create({
			data: {
				name: userName,
				email,
				password: hashedPassword,
				role,
			},
		});
		console.log(req.body, result);
		req.result = result;
		next();
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: 'Could Not Write To DB' });
	}
};

const loginUser = async (req, res, next) => {
	console.log('LOGIN', req.body);
	logger.info(`starting loginUser middleware`);
	try {
		const response = await prisma.users.findMany({
			where: {
				email: { equals: req.body.email },
			},
		});
		req.user = response[0];
		logger.info(`Found user`, req.user);
		if (!req.user) {
			logger.error(`No user with email: ${req.body.email}`);
			res.status(400).send('No Such User');
		}
		req.isAuthorized = await bcrypt.compare(req.body.password, req.user.password);
		logger.info(`User isAuthorized`, isAuthorized);
		if (req.isAuthorized) {
			next();
		} else {
			res.status(401).send('Unathorized');
		}
	} catch (error) {
		logger.error(`Database Promise Error`, error);
		res.status(500).send('Database Promise Error');
	}
};

const createUrl = async (req, res, next) => {
	let { originalUrl, email } = req.body;
	const randomId = Math.floor((1 + Math.random()) * 0x1000000)
		.toString(16)
		.substring(1);
	try {
		const newUrl = await prisma.urls.create({
			data: {
				hash: randomId,
				originalUrl,
				updatedAt: new Date(),
				...(email && { author: { connect: { email } } }),
			},
		});
		req.newUrl = newUrl;
		next();
	} catch (error) {
		console.log(error);
		return res.status(400).json({ error });
	}
};

const updateUser = async (req, res, next) => {
	const { name, email, role } = req.body;
	try {
		const updatedUser = await prisma.users.update({
			where: {
				id: parseInt(req.params.id),
			},
			data: {
				name: name,
				email,
				role,
			},
		});
		next();
	} catch (error) {
		res.status(400).json({ error });
	}
};

const deleteUser = async (req, res, next) => {
	const { id } = req.params;
	try {
		const deletedUser = await prisma.users.delete({
			where: {
				id: parseInt(id),
			},
		});

		next();
	} catch (error) {
		res.status(400).json({ error });
	}
};

const getUserUrls = async (req, res, next) => {
	const { userId } = req.params;
	try {
		const urls = await prisma.users
			.findUnique({
				where: {
					id: parseInt(userId),
				},
			})
			.urls({});
		req.urls = urls;
		next();
	} catch (error) {
		return res.status(400).json({ error });
	}
};

const getHashedUrl = async (req, res, next) => {
	try {
		const hashedUrl = await prisma.urls.update({
			where: {
				hash: req.path.substring(1),
			},
			data: {
				viewCount: {
					increment: 1,
				},
				updatedAt: new Date(),
			},
		});
		if (hashedUrl) return res.redirect(hashedUrl.originalUrl);
	} catch (error) {
		console.log(error);
	}
	next();
};

module.exports = {
	createUrl,
	loginUser,
	registerUser,
	getHashedUrl,
	deleteUser,
	updateUser,
	getUserUrls,
	prisma,
};
