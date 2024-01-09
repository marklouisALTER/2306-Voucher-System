const expressAsyncHandler = require('express-async-handler');
const { getUserDatabaseConnection, masterDB,mainConnection } = require('../connection/connection');
const moment = require('moment-timezone');
require('dotenv').config();

const AddCredits = expressAsyncHandler(async (req, res)=> {
    const { email, credits, price, reference_num, screenshot } = req.body;
    const setStatus = 'Pending';
    const createdAt = moment().tz('Asia/Manila').format('YYYY-MM-DD HH:mm:ss');
    const screenshotBuffer = Buffer.from(screenshot, 'base64');
    const usernameFromEmail = email.split('@')[0];
    const userDatabaseName = `2306_${usernameFromEmail}`;
    if(email === '' || credits === '' || price === '' || reference_num === '' || screenshot === ''){
        return res.status(400).json({success: false, title: "Error", "message": "Please fill out all fields"});
    }

    const userDatabasePool = getUserDatabaseConnection(usernameFromEmail);

    if(!userDatabasePool){
        return res.status(500).json({success: false, title: "Error", "message": "User-specific database pool not created"});
    }

    await userDatabasePool.query(`USE ${userDatabaseName}`);

    try{
        await userDatabasePool.query("SELECT id FROM tbl_plan ORDER BY start_date DESC LIMIT 1", async(err, result) => {
            fkId = result[0].id;
            await userDatabasePool.query(`INSERT INTO tbl_add_credits (transac_id, extra_credit_point, price, screenshot, reference_num, status, date_created ) VALUES (?, ?, ?, ?, ?, ?, ?)`, [
                fkId,
                credits,
                price,
                screenshotBuffer,
                reference_num,
                setStatus,
                createdAt
            
            ] , async (err, result) => {
                if(err){
                    return res.status(500).json({success: false, title: "Error", "message": err.message});
                }
                const isRead = 0;
                const message = `User ${email} requesting credits points on 2306 Voucher`
                await masterDB.query("INSERT INTO tbl_notifications (message, isRead, created_At) VALUES(?, ?, ?)", [
                    message,
                    isRead,
                    createdAt
                ], (err, result)=>{
                    if(err){
                        return res.status(500).json({success: false, title: "Error", "message": err.message});
                    }
    
                    mainConnection.query("SELECT id FROM tbl_user WHERE email_address = ?", [email], (err, result) => {
                        if(err){
                            return res.status(500).json({success: false, title: "Error", "message": err.message});
                        }
                        const userId = result[0].id;
                        mainConnection.query("SELECT id FROM tbl_transaction WHERE payment_id = ?", [userId], (err, result) => {
                            if(err){
                                return res.status(500).json({success: false, title: "Error", "message": err.message});
                            }
                            const transactionId = result[0].id;
                            mainConnection.query("INSERT INTO tbl_add_credits (transac_id, extra_credit_point, price, reference_num, screenshot, status, date_created) VALUES(?, ?, ?, ?, ?, ?, ?)", [
                                transactionId,
                                credits,
                                price,
                                reference_num,
                                screenshotBuffer,
                                setStatus,
                                createdAt
                            ], (err, result) => {
                                if(err){
                                    return res.status(500).json({success: false, title: "Error", "message": err.message});
                                }
                                return res.status(200).json({success: true, title: "Success", "message": "Credits added successfully"});
                            })
                        })
                    })
                    
                })
            })
        })
    }catch(err){
        res.status(500).json({success: false, title: "Error", "message": err.message});
    }

})

module.exports = AddCredits;