//Dependencies
const mysql = require('mysql');

//Connection for sql database
const connection = mysql.createConnection ({
    host: 'localhost',
    port: 3000,
    user: 'root',
    password: 'Storm#521',
    database: 'employee_db'
});

//Function to read data from database
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