const expressAsyncHandler = require('express-async-handler');
const connection = require('../connection/connection.js');
const bcrypt = require('bcrypt');
const moment = require('moment-timezone');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');

require('dotenv').config();

const Register = expressAsyncHandler(async (req, res) => {
    const {
        tin,
        usertype,
        firstname,
        middlename,
        lastname,
        registeredAddress,
        zipCode,
        foreignAddress,
        emailAddress,
        password,
        signature,
    } = req.body;

    const createdAt = moment().tz('Asia/Manila').format('YYYY-MM-DD HH:mm:ss');
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const signatureData = signature.split(',')[1];
    const decodedSignature = Buffer.from(signatureData, 'base64');
    const uniqueId = uuidv4();

    try {
        const usernameFromEmail = emailAddress.split('@')[0];
        const userDatabaseName = `user_${usernameFromEmail}`;

        await connection.mainConnection.query(
            'INSERT INTO tbl_user (user_num, user_type,  firstname, middlename, lastname, tin, registered_address, zip_code, foreign_address, email_address, password, signature, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [uniqueId, usertype, firstname, middlename, lastname, tin, registeredAddress, zipCode, foreignAddress, emailAddress, hash, decodedSignature, createdAt]
        );
        
        await connection.mainConnection.query(`CREATE DATABASE IF NOT EXISTS ${userDatabaseName}`);
        
        const userDatabasePool = connection.getUserDatabaseConnection(usernameFromEmail);

        if (!userDatabasePool) {
            throw new Error('User-specific database pool not created');
        }

        console.log(`Attempting to create database: ${userDatabaseName}`);
        // await userDatabasePool.query(`CREATE DATABASE IF NOT EXISTS ${userDatabaseName}`);
        await userDatabasePool.query(`USE ${userDatabaseName}`);

        await userDatabasePool.query(`
            CREATE TABLE IF NOT EXISTS user_data (
                id INT AUTO_INCREMENT PRIMARY KEY,
                user_num VARCHAR(255),
                user_type VARCHAR(255),
                firstname VARCHAR(255),
                middlename VARCHAR(255),
                lastname VARCHAR(255),
                tin VARCHAR(255),
                registered_address VARCHAR(255),
                zip_code VARCHAR(255),
                foreign_address VARCHAR(255),
                email_address VARCHAR(255),
                password VARCHAR(255),
                signature BLOB,
                created_at DATETIME
            )
        `);

        await userDatabasePool.query(
            `INSERT INTO user_data (user_num, user_type, firstname, middlename, 
            lastname, tin, registered_address, zip_code, foreign_address, 
            email_address, password, signature, created_at) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                uniqueId,
                usertype,
                firstname,
                middlename,
                lastname,
                tin,
                registeredAddress,
                zipCode,
                foreignAddress,
                emailAddress,
                hash,
                decodedSignature,
                createdAt,
            ]
        );

        // Voucher Table
        await userDatabasePool.query(`
            CREATE TABLE IF NOT EXISTS user_voucher_2306 (
                id INT AUTO_INCREMENT PRIMARY KEY,
                control_no VARCHAR(250) DEFAULT '1000A' NOT NULL,            
                voucher BLOB,
                created_at DATETIME
            )
        `);
    

        console.log(`Database creation successful: ${userDatabaseName}`);

        res.status(200).json({ title: 'Success', message: 'Registration Successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ title: 'Internal Error', message: error.message });
    }
});

module.exports = Register;
