const expressAsyncHandler = require('express-async-handler');
const { mainConnection, getUserDatabaseConnection } = require('../connection/connection.js');

const moment = require('moment-timezone');
require('dotenv').config();


const SaveVoucher = expressAsyncHandler(async (req, res) => {

    const { email, control_no } = req.body;
    const uploadedBlob = req.file.buffer;


    const usernameFromEmail = email.split('@')[0];
    const userDatabaseName = `user_${usernameFromEmail}`;
    const createdAt = moment().tz('Asia/Manila').format('YYYY-MM-DD HH:mm:ss');

  
    const userDatabasePool = getUserDatabaseConnection(usernameFromEmail);

    if (!userDatabasePool) {
        throw new Error('User-specific database pool not created');
    }
    await userDatabasePool.query(`USE ${userDatabaseName}`);

    try {
        await userDatabasePool.query(`INSERT INTO user_voucher (voucher, created_at, control_no) 
            VALUES (?, ?, ?)`,
        [uploadedBlob, createdAt, control_no])

        res.status(200).send('Voucher saved successfully');
    } catch(err) {
        console.error('Error saving voucher:', err);
        res.status(500).send('Internal Server Error');
    }
   

})

module.exports = SaveVoucher;