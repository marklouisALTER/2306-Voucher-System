const express = require('express');
const RouterUserRetrieve = express.Router();
const userController = require('../controller/User.js');
// const UserRetrieve = require('../controller/User.js');

// RouterUserRetrieve.post('/api/user-retrieve',UserRetrieve);
RouterUserRetrieve.post('/api/user-retrieve',userController.UserRetrieve);

module.exports = RouterUserRetrieve