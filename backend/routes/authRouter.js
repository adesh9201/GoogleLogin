const express = require('express');
const Router = express.Router();
const { googleAuth } = require('../controllers/authController');

Router.get("/google", googleAuth);
// Router.post("/google", googleAuth);

module.exports = Router;