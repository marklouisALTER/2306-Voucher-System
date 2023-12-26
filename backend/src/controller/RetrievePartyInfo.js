const expressAsyncHandler = require('express-async-handler');
const {mainConnection} = require('../connection/connection.js');
require('dotenv').config();

const RetrievePartyInfo = expressAsyncHandler(async (req, res) => {
    const { usernum } = req.body;
    // console.log(userEmail);

    mainConnection.query('SELECT * FROM tbl_users WHERE user_num = ?', [usernum], (err, result) => {
        if (err) {
            res.status(500).json({ title: 'Error', message: err.message, isSuccess: false });
        }

        if (result.length === 1) {
            const user = result[0];
            
            // Convert the Buffer to base64 for the signature field
            const signatureBase64 = user.signature.toString('base64');

            const userJson = {
                user_num: user.user_num,
                user_type: user.user_type,
                firstname: user.firstname,
                middlename: user.middlename,
                lastname: user.lastname,
                tin: user.tin,
                registered_address: user.registered_address,
                zip_code: user.zip_code,
                foreign_address: user.foreign_address,
                email_address: user.email_address,
                password: user.password,
                signature: signatureBase64 // Use the base64-encoded string for the signature
            };

            res.status(200).json({ title: 'Success', message: 'Retrieved Successful', user: userJson, isSuccess: true });
        } else {
            res.status(401).json({ title: 'Error', message: 'Credentials Incorrect', isSuccess: false });
        }
    });
});

module.exports = RetrievePartyInfo;
