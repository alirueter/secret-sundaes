const router = require('express').Router();
const userRoutes = require('./user-routes');

// add '/users' prefix to user-routes.js
router.use('/users', userRoutes);

module.exports = router;