const expressAsyncHandler = require('express-async-handler');
const { mainConnection, getUserDatabaseConnection } = require('../connection/connection.js');

const moment = require('moment-timezone');
const e = require('express');
require('dotenv').config();


const GetCountVoucher = expressAsyncHandler(async (req, res) => {

    const { email } = req.params;     
    
    const usernameFromEmail = email.split('@')[0];
    const userDatabaseName = `2306_${usernameFromEmail}`;
    
    const userDatabasePool = getUserDatabaseConnection(usernameFromEmail);

    if (!userDatabasePool) {
        throw new Error('User-specific database pool not created');
    }
    await userDatabasePool.query(`USE ${userDatabaseName}`);

    try {
        const result = await userDatabasePool.query('SELECT COUNT(*) as count FROM user_voucher_2306');
    
        if (!result || result.length === 0) {
          return res.status(404).send('No vouchers found');
        }
    
        const rowCount = result[0].count;
      
        res.header('Cache-Control', 'no-store');
        res.status(200).json({ title: 'Success', message: 'Retrieved Successful', rowCount });
      } catch (err) {
        console.error('Error retrieving voucher count:', err);
        res.status(500).send('Internal Server Error');
      }
});

module.exports = GetCountVoucher;