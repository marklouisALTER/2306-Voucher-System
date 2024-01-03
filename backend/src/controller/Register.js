const expressAsyncHandler = require('express-async-handler');
const {mainConnection} = require('../connection/connection.js');
const bcrypt = require('bcrypt');
const moment = require('moment-timezone');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');

require('dotenv').config();

const Register = expressAsyncHandler(async (req, res) => {
  const {
        tin,
        usertype,
        firstname,
        middlename,
        lastname,
        registeredAddress,
        zipCode,
        foreignAddress,
        emailAddress,
        password,
        total_price,
        selected_plan,
        quantity,
        plan_creditpoints,
        screenshot,
        reference_num,
        signature,
        
    } = req.body;

    const createdAt = moment().tz('Asia/Manila').format('YYYY-MM-DD HH:mm:ss');
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const signatureData = signature.split(',')[1];
    const screenshotBuffer = Buffer.from(screenshot, 'base64');
    const decodedSignature = Buffer.from(signatureData, 'base64');
    const uniqueId = uuidv4();
    const status = 'Pending';
    const paymentStatus = null;

    // console.log(screenshot)
    mainConnection.query('SELECT email_address FROM tbl_user WHERE email_address = ?', [emailAddress], (err, result) => {
        if(err){
            res.status(500).json({ title: 'Error', message: err.message, isSuccess: false });
        }
        
        if(result.length > 0){
            res.status(401).json({ title: 'Error', message: 'Email Address Already Exist', isSuccess: false });
        }
        mainConnection.query('INSERT INTO tbl_user (user_num, user_type, firstname, middlename, lastname, tin, registered_address, zip_code, foreign_address, email_address, password, signature, status, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [uniqueId, usertype, firstname, middlename, lastname, tin, registeredAddress, zipCode, foreignAddress, emailAddress, hash, decodedSignature, status, createdAt], (err, result) => {
            if(err){
                res.status(500).json({ title: 'Error', message: err.message, isSuccess: false });
            }
            // console.log(signature);
            //create me a status if else successful the inserting the data
            if(result.affectedRows > 0){
                mainConnection.query('SELECT id FROM tbl_user WHERE email_address = ?', [emailAddress], (err, result)=> {
                    if(err){
                        res.status(500).json({ title: 'Error', message: err.message, isSuccess: false });
                    }
                    const userId = result[0].id;
                    mainConnection.query('INSERT INTO tbl_transaction (payment_id, selected_plan, quantity, total_price, plan_creditpoints, reference_num, screenshot, status, date_created) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [userId, selected_plan, quantity, total_price, plan_creditpoints, reference_num, screenshotBuffer, paymentStatus, createdAt], (err, result) => {
                        if(err){
                            res.status(500).json({ title: 'Error', message: err.message, isSuccess: false });
                        }
                        res.status(200).json({ title: 'Success', message: 'Registered complete wait for email confimation.', isSuccess: true });
                    });
                })
            }else{
                res.status(500).json({ title: 'Error', message: 'Error in inserting data', isSuccess: false });
            }


        });

    });
    
});

module.exports = Register;
