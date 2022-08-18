const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

// http://localhost:3000/api/auth
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;