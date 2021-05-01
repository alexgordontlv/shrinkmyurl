require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { tokenAuth } = require('./middlewares/tokenauth');
const { adminAuth } = require('./middlewares/adminauth');
const { redisClient } = require('./utilities/utlities');
const { createUrl, loginUser, registerUser } = require('./middlewares/prismaqueries');
const PORT = process.env.PORT || '5000';

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static('public'));
app.use(cors());
app.use(express.json());

app.post('/login', loginUser, async (req, res) => {
	try {
		const hashResponse = await bcrypt.compare(req.body.password, req.user.password);
		if (hashResponse) {
			const accessToken = await jwt.sign(
				{
					id: req.user,
				},
				process.env.ACCESS_TOKEN_SECRET,
				{
					expiresIn: '20m',
				}
			);
			console.log('req.user', req.user);
			res.status(200).send({
				user: {
					id: req.user,
					role: req.user,
					email: req.user,
					token: accessToken,
				},
			});
		} else {
			res.status(401).send('Password is incorrect');
		}
	} catch (error) {
		res.status(500).send();
	}
});

app.post('/register', registerUser, async (req, res) => {
	res.status(201).json({ msg: 'Successfully added user' });
});

app.put('/update:id', tokenAuth, adminAuth, async (req, res) => {
	const { name, email, role } = req.body;
	console.log(req.body);

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
		console.log(updatedUser);
		res.status(201).json({ msg: 'Successfully updated user' });
	} catch (error) {
		res.status(400).json({ error });
	}
});

app.get('/users', tokenAuth, adminAuth, async (req, res) => {
	const users = await prisma.users.findMany();
	res.send(users);
});

app.delete('/delete:id', tokenAuth, adminAuth, async (req, res) => {
	const { id } = req.params;
	try {
		const deletedUser = await prisma.users.delete({
			where: {
				id: parseInt(id),
			},
		});
		console.log(deletedUser);
		res.status(201).json({ msg: 'Successfully deleted user' });
	} catch (error) {
		res.status(400).json({ error });
	}
});

app.get('/userurls:userId', async (req, res) => {
	const { userId } = req.params;
	try {
		const urls = await prisma.users
			.findUnique({
				where: {
					id: parseInt(userId),
				},
			})
			.urls({});
		return res.status(200).send(urls);
	} catch (error) {
		return res.status(400).json({ error });
	}
});

app.post('/createurl', createUrl, (req, res) => {
	return res.status(201).json({ msg: 'Successfully created url', Url: req.newUrl });
});

app.get('/favicon.ico', (req, res) => res.status(204).end());

app.use(async (req, res, next) => {
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
		console.log('page load', hashedUrl);
		if (hashedUrl) res.redirect(hashedUrl.originalUrl);
	} catch (error) {
		console.log(error);
	}

	res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(PORT, () => {
	console.log(`server is working on port:${PORT}`);
});
