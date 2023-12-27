const expressAsyncHandler = require('express-async-handler');
const { mainConnection, getUserDatabaseConnection } = require('../connection/connection.js');

const moment = require('moment-timezone');
const e = require('express');
require('dotenv').config();


const GetVoucher = expressAsyncHandler(async (req, res) => {

    const { email } = req.params;     
    
    const usernameFromEmail = email.split('@')[0];
    const userDatabaseName = `2306_${usernameFromEmail}`;
    
    const userDatabasePool = getUserDatabaseConnection(usernameFromEmail);

    if (!userDatabasePool) {
        throw new Error('User-specific database pool not created');
    }
    await userDatabasePool.query(`USE ${userDatabaseName}`);

    try {
        const result = await userDatabasePool.query('SELECT * FROM user_voucher_2306');
        
        if (!result || result.length === 0) {
            return res.status(200).send('No vouchers found');
        }

        const voucherData = result.map((voucher) => ({
            control_no: voucher.control_no,
            voucher: voucher.voucher.toString('base64'),
            created_at: voucher.created_at,
        }));
        

        res.header('Cache-Control', 'no-store');
        res.status(200).json({ title: 'Success', message: 'Retrieved Successful', voucherData: voucherData });
        
    } catch(err) {
        console.error('Error saving voucher:', err);
        res.status(500).send('Internal Server Error');
    }
   

})

module.exports = GetVoucher;