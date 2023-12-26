const expressAsyncHandler = require('express-async-handler');
const {mainConnection} = require('../connection/connection.js');
const bcrypt = require('bcrypt');

const ChangePassword = expressAsyncHandler(async (req, res)=> {
    const { username, password, new_password } = req.body;

    mainConnection.query('SELECT email_address, password FROM tbl_users WHERE email_address = ? ', [username], async (err, result)=> {
        if(err){
            res.status(500).json({ title: 'Error', message: err.message, isSuccess: false });
        }

        if(result.length === 1){
            const storedHashedPassword = result[0].password;
            const passwordMatch = await bcrypt.compare(password, storedHashedPassword);

            if(passwordMatch) {
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(new_password, salt);

                mainConnection.query('UPDATE tbl_users SET password = ? WHERE email_address = ?', [hash, username], (err, result) => {
                    if(err){
                        res.status(500).json({ title: 'Error', message: err.message, isSuccess: false });
                    }
                        res.status(200).json({ title: 'Success', message: 'Password Changed', isSuccess: true });
                });

            }else{
                res.status(401).json({ title: 'Error', message: 'Password Incorrect', isSuccess: false });
            }
        }else{
            res.status(401).json({ title: 'Error', message: 'Username Incorrect', isSuccess: false });
        }
    })
});

module.exports = ChangePassword;