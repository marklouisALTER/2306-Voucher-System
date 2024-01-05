const expressAsyncHandler = require('express-async-handler');
const { mainConnection, getUserDatabaseConnection } = require('../connection/connection.js');
const connection = require('../connection/connection.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const Login = expressAsyncHandler(async (req, res) => {
    const { username, password, checked } = req.body;

    mainConnection.query('SELECT * FROM tbl_user WHERE email_address = ?', [username], async (err, result) => {
        if(err){
            res.status(500).json({title: 'Internal Error', message: err.message});
        }
        if(result.length === 1){

            const storedHashedPassword = result[0].password;
            const passwordMatch = await bcrypt.compare(password, storedHashedPassword);

            if(passwordMatch){
                const userDatabaseConnection = getUserDatabaseConnection(username);
                console.log(userDatabaseConnection?.config);
                
                userDatabaseConnection.query(`USE 2306_${username.split('@')[0]}`);
                
                const token = jwt.sign(
                    {username: username},
                    process.env.JWT_TOKEN,
                    {expiresIn: checked ? '1d': '7d'}
                )
    
                res.status(200).json({title: "Success", message: "Login Successful", token: token, username: username});    
            }else{
                res.status(401).json({title: "Login Error", message: "Password Incorrect"})
            }

        }else{
            res.status(401).json({title: "Login Error", message: "Credentials Incorrect"})
        }
    })
})


module.exports = Login;