const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const adminAuth = async (req, res, next) => {
	console.log(req.user);
	if (!req.user) return res.status(400).json({ err: 'There is no user' });
	const userById = await prisma.users.findUnique({
		where: {
			id: parseInt(req.user?.id),
		},
	});
	console.log(userById);
	if (!userById) return res.status(400).json({ err: 'There is no user in database' });
	if (userById?.role !== 'admin') return res.status(401).json({ err: 'No Role Premmision' });
	console.log('all fine');
	next();
};

module.exports = {
	adminAuth,
};
