const expressAsyncHandler = require('express-async-handler');
const {mainConnection} = require('../connection/connection.js');
const bcrypt = require('bcrypt');

const ChangeSignature = expressAsyncHandler(async (req, res) => {
    const {username, signature} = req.body;

    const signatureData = signature.split(',')[1]; 
    const decodedSignature = Buffer.from(signatureData, 'base64');

    mainConnection.query('UPDATE tbl_users SET signature = ? WHERE email_address = ?', [decodedSignature, username], (err, result) => {
        if(err){
            res.status(500).json({ isSuccess: false, title: 'Internal Error', message: err.message });
        }
        if(result){
            res.status(200).json({isSuccess: true, title: "Success", message: "Signature Changed"});
        }
    });
})

module.exports = ChangeSignature;