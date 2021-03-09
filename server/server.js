require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { tokenAuth } = require('./middlewares/tokenauth');
const { PrismaClient } = require('@prisma/client');

const PORT = process.env.PORT || '5000';

const prisma = new PrismaClient();
app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static('public'));
app.use(cors());
app.use(express.json());

app.post('/login', async (req, res) => {
	console.log(req.body.email);
	const response = await prisma.users.findMany({
		where: {
			email: { equals: req.body.email },
		},
	});
	const user = response[0];
	if (!user) {
		res.status(400).send('no such user');
	}
	try {
		const hashResponse = await bcrypt.compare(req.body.password, user.password);
		if (hashResponse) {
			const accessToken = await jwt.sign(
				{
					name: user.name,
				},
				process.env.ACCESS_TOKEN_SECRET,
				{
					expiresIn: '10m',
				}
			);
			res.status(200).send({
				user: {
					id: user.id,
					role: user.role,
					name: user.name,
					email: user.email,
					token: accessToken,
				},
			});
		} else {
			res.status(401).send('Not Allowed');
		}
	} catch (error) {
		res.status(500).send();
	}
});

app.post('/register', async (req, res) => {
	const { userName, email, password } = req.body;
	try {
		const hashedPassword = await bcrypt.hash(password, 10);
		const result = await prisma.users.create({
			data: {
				name: userName,
				email,
				password: hashedPassword,
			},
		});
		console.log(result);
		res.status(201).send();
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: 'Could Not Write To DB' });
	}
});

app.put('/update', tokenAuth, async (req, res) => {
	const { userName, email, id } = req.body;
	console.log(req.body);
	try {
		const updatedUser = await prisma.users.update({
			where: {
				id: parseInt(id),
			},
			data: {
				name: userName,
				email,
			},
		});
		console.log(updatedUser);
		res.status(201).json({ msg: 'Successfully updated user' });
	} catch (error) {
		res.tatus(400).json({ error });
	}
});
app.delete('/update', tokenAuth, async (req, res) => {
	const { userName, email, id } = req.body;
	console.log(req.body);
	try {
		const updatedUser = await prisma.users.delete({
			where: {
				id: parseInt(id),
			},
		});
		console.log(updatedUser);
		res.status(201).json({ msg: 'Successfully updated user' });
	} catch (error) {
		res.tatus(400).json({ error });
	}
});

app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(PORT, () => {
	console.log(`server is working on port:${PORT}`);
});
