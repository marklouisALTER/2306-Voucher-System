const expressAsyncHandler = require('express-async-handler');
const { getUserDatabaseConnection } = require('../connection/connection')
require('dotenv').config();

const getVoucher = expressAsyncHandler(async (req, res) => {
    const { email } = req.query;
    const usernameFromEmail = email.split('@')[0];
    const userDatabaseName = `2306_${usernameFromEmail}`;
    
    const userDatabasePool = getUserDatabaseConnection(usernameFromEmail);

    if (!userDatabasePool) {
        throw new Error('User-specific database pool not created');
    }
    await userDatabasePool.query(`USE ${userDatabaseName}`);

    try{ 
        await userDatabasePool.query('SELECT available_creditpoints FROM tbl+plan ORDER BY start_date DESC LIMIT 1', (err, result) => {
            if(err){
                return res.status(500).json({success: false, title: "Error", "message": err.message});
            }
            return res.status(200).json({success: true, title: "Success", "message": "Retrieved Successful", data: result});
        })

    }catch(err){
        res.status(500).json({success: false, title: "Error", "message": err.message});
    }


})

module.exports = getVoucher;