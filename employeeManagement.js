//Dependencies
const express = require('express');
const mysql = require('mysql');
// const inquirer = require('inquirer');
require('dotenv').config();



//PORT
const PORT = process.env.PORT || 3001;
const app = express();

//Middleware added
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

// inquirer
// .prompt ([
//     {
//         type: "list", 
//         choices: ["Search for employee", "Add employee", "Edit employee", "Remove employee"],
//         name: "action", 
//         message: "What would you like to do?"

//     }
// ])

connection.query('SELECT * FROM employee_db', function (err, results) {
    console.log(results);
});

app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

// Function to read data from database
// const readEmployeeData = () => {
//     connection.query('SELECT * FROM employee_db', (err, res) => {
//         if (err) throw err;

//         console.log(res);
//         connection.end();
//     });
// };

// connection.connect((err) => {
//     if(err) throw err;
//     console.log("Connected!");
//     readEmployeeData();
// });

