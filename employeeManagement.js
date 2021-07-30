//Dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');
require('dotenv').config();

//Connection for sql database
const connection = mysql.createConnection ({
    host: 'localhost',
    port: 3000,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

inquirer
.prompt ([
    {
        type: "list", 
        choices: ["Search for employee", "Add employee", "Edit employee", "Remove employee"],
        name: "action", 
        message: "What would you like to do?"

    }
])

// Function to read data from database
const readEmployeeData = () => {
    connection.query('SELECT * FROM employee_db', (err, res) => {
        if (err) throw err;

        console.log(res);
        connection.end();
    });
};

connection.connect((err) => {
    if(err) throw err;
    readEmployeeData();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });