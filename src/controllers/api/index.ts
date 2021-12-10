const router = require('express').Router();

const formRoutes = require('./form-routes');

router.use('/forms', formRoutes);