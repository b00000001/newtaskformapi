const router = require('express').Router();

const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);

export default router;
