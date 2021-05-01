const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');

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
	console.log('middleware');
	try {
		const response = await prisma.users.findMany({
			where: {
				email: { equals: req.body.email },
			},
		});
		req.user = response[0];
		if (!req.user) {
			res.status(400).send('No Such User');
		}
		next();
	} catch (error) {
		res.status(500).send('Database Promise Error');
	}
};

const createUrl = async (req, res, next) => {
	const { originalUrl, email } = req.body;
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

module.exports = {
	createUrl,
	loginUser,
	registerUser,
};
