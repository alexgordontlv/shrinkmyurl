const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const adminAuth = async (req, res, next) => {
	console.log('admin check');
	if (!req.user) return res.status(400).json({ err: 'There is no user' });
	const userById = await prisma.users.findUnique({
		where: {
			id: parseInt(req.user?.id),
		},
	});
	if (!userById) return res.status(400).json({ err: 'There is no user in database' });
	if (userById.id === parseInt(req.body?.id) || userById?.role === 'admin') {
		return next();
	} else {
		return res.status(401).json({ err: 'No Role Premmision' });
	}
};

module.exports = {
	adminAuth,
};
