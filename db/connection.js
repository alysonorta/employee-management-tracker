const util = require('util');
const mysql = require('mysql');
require('dotenv').config();

//Connection for mysql database
const connection = mysql.createConnection (
    {
        host: 'localhost',
        port: 3000,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
    console.log(`Connected to the employee_db database.`)
);

connection.connect();

connection.query= util.promisify(connection.query);

module.exports=connection