const express = require('express');
const multer = require('multer');
const RouterUser = express.Router();
const Login = require('../controller/User.js');
const ChangePassword = require('../controller/ChangePassword.js');
const UserRetrieve = require('../controller/Retrieve_user.js');
const RetrievePartyInfo = require('../controller/RetrievePartyInfo.js');
const SaveVoucher = require('../controller/SaveVoucher.js');
const GetVoucher = require('../controller/GetVouchers.js');
const GetCountVoucher = require('../controller/GetCountVoucher.js');
const Register = require('../controller/Register.js');
const ChangeSignature = require('../controller/ChangeSignature.js');
const getVoucher = require('../controller/GetCreditPoints.js');
const GetSubscriptionPlan = require('../controller/GetSubsciptionPlan.js');
const AddCredits = require('../controller/AddCredits.js');

// Set up multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

RouterUser.post('/user',Login); // login method

RouterUser.post('/change_password', ChangePassword); // change password of the user

RouterUser.post('/user_retrieve', UserRetrieve); // retrieve the user info

RouterUser.post('/party_retrieve', RetrievePartyInfo); // retrieve the party info

RouterUser.post('/save_voucher',upload.single('file'), SaveVoucher); // save the voucher

RouterUser.get('/get_voucher/:email', GetVoucher); // retrieve users vouchers

RouterUser.get('/get_count_voucher/:email', GetCountVoucher); // retrieve count vouchers

RouterUser.post('/register', Register); // register the user

RouterUser.get('/get_credits', getVoucher);

RouterUser.get('/get_billing', GetSubscriptionPlan);

RouterUser.post('/change_signature', ChangeSignature)

RouterUser.post('/add_credits', AddCredits);

module.exports = RouterUser