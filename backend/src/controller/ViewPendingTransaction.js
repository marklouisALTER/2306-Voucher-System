const expressAsyncHandler = require('express-async-handler');
const { getUserDatabaseConnection } = require('../connection/connection')
require('dotenv').config();
const strftime = require('strftime');

const ViewPendingTransaction = expressAsyncHandler(async (req, res) => {
    const { email } = req.query;

    const usernameFromEmail = email.split('@')[0];
    const userDatabaseName = `2306_${usernameFromEmail}`;
    
    const userDatabasePool = getUserDatabaseConnection(usernameFromEmail);

    if (!userDatabasePool) {
        throw new Error('User-specific database pool not created');
    }
    await userDatabasePool.query(`USE ${userDatabaseName}`);

    try{ 
        await userDatabasePool.query('SELECT * FROM tbl_add_credits', (err, result) => {
            if(err){
                return res.status(500).json({success: false, title: "Error", "message": err.message});
            }

            if (!result || result.length === 0) {
                return res.status(200).json({success: true, title: "Success", "message": "No vouchers found"})
            }
    
            const viewPendingOrder = result.map((pendingTransac) => ({
                extra_credit_point: pendingTransac.extra_credit_point,
                price: pendingTransac.price,
                screenshot: pendingTransac.screenshot.toString('base64'),
                reference_num: pendingTransac.reference_num,
                status: pendingTransac.status,
                created_at: strftime('%m-%d-%Y:%H-%M-%S', new Date(pendingTransac.date_created)),
            }));
            res.header('Cache-Control', 'no-store');
            return res.status(200).json({success: true, title: "Success", "message": "Retrieved Successful", data: viewPendingOrder});
        })

    }catch(err){
        res.status(500).json({success: false, title: "Error", "message": err.message});
    }


})

module.exports = ViewPendingTransaction;