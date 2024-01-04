const expressAsyncHandler = require('express-async-handler');
const { getUserDatabaseConnection } = require('../connection/connection')
require('dotenv').config();
const strftime = require('strftime');

const GetSubscriptionPlan = expressAsyncHandler(async (req, res) => {
    const { email } = req.query;
    const usernameFromEmail = email.split('@')[0];
    const userDatabaseName = `2306_${usernameFromEmail}`;
    
    const userDatabasePool = getUserDatabaseConnection(usernameFromEmail);

    if (!userDatabasePool) {
        throw new Error('User-specific database pool not created');
    }
    await userDatabasePool.query(`USE ${userDatabaseName}`);

    try{ 
        await userDatabasePool.query('SELECT * FROM tbl_transaction ORDER BY start_date DESC LIMIT 1', (err, result) => {
            if(err){
                
                return res.status(500).json({success: false, title: "Error", "message": err.message});
            }
            const date_started = strftime('%m-%d-%Y:%H-%M-%S', new Date(result[0].start_date)); 
            const expired_date = strftime('%m-%d-%Y:%H-%M-%S', new Date(result[0].expiry_date));
            
            const startDate = new Date(result[0].start_date);
            const expiryDate = new Date(result[0].expiry_date);
            const timeDifference = expiryDate - startDate;
            const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            
            const percentage = ((result[0].available_creditpoints / result[0].plan_creditpoints) * 100).toFixed(2);
            
            const userPlan = {
                selected_plan: result[0].selected_plan,
                quantity: result[0].quantity,
                total_price: result[0].total_price,
                plan_creditpoints: result[0].plan_creditpoints,
                available_creditpoints: result[0].available_creditpoints,
                date_created: result[0].date_created,
                start_date: date_started,
                expiry_date: expired_date,
                remaining_day: daysDifference,
                creditpercentage: percentage
            }
            return res.status(200).json({success: true, title: "Success", "message": "Retrieved Successful", data: userPlan});
        })

    }catch(err){
        res.status(500).json({success: false, title: "Error", "message": err.message});
    }

})

module.exports = GetSubscriptionPlan;