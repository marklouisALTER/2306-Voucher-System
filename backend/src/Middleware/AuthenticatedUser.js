const jwt = require('jsonwebtoken');
const { getUserDatabaseConnection } = require('../connection/connection');
require('dotenv').config();

const authenticateUser = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const {email} = req.query;
        console.log(email);
        const usernameFromEmail = email.split('@')[0];
        const userDatabaseName = `2306_${usernameFromEmail}`;

        const userDatabasePool = getUserDatabaseConnection(usernameFromEmail);

        if (!userDatabasePool) {
            res.status(404).json({ success: false, title: "Error", message: "User-specific database pool not created" });
        }

        await userDatabasePool.query(`USE ${userDatabaseName}`);

        if (!token) {
            return res.status(401).json({ success: false, title: "Failed", message: "Unauthorized: Missing token" });
        }

        jwt.verify(token, process.env.JWT_TOKEN, async (err, decoded) => {
            if (err) {
                if (err.name === 'TokenExpiredError') {
                    return res.status(401).json({ success: false, title: "Failed", message: "Unauthorized: Token expired" });
                }
                return res.status(401).json({ success: false, title: "Failed", message: "Unauthorized: Invalid token", token: token });
            }

            req.user = decoded.user;

            await userDatabasePool.query('SELECT * FROM tbl_user WHERE email_address = ?', [decoded.user], (err, result) => {
                if (err) {
                    return res.status(500).json({ success: false, title: "Failed", message: err.message });
                }

                if (result.length === 1) {
                    next();
                } else {
                    return res.status(401).json({ success: false, title: "Failed", message: "Unauthorized: Invalid token" });
                }
            });
        });
    } catch (err) {
        return res.status(500).json({ success: false, title: "Failed", message: err.message });
    }
};

module.exports = authenticateUser;
