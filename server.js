//Dependencies
const inquirer = require('inquirer');
// const db = require('./db');
const mysql = require('mysql');
// const cTable = require ('console.table');
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

connection.connect((err) => {
    if (err) throw err;
    mainPrompt();
});



const mainPrompt =  () => {
    inquirer
    .prompt ([
        {
            name: "action",
            type: "list",              
            message: "What would you like to do?",
            choices: [
                {
                    name: "Search for employee",
                    value: "search_for_employee"
                },
                {
                   name: "Add employee",
                   value: "add_employee"
                 },
                {
                    name: "Edit employee",
                    value: "edit_employee"
                },
                {
                    name: "Remove employee",
                    value: "remove_employee"
                },
                {
                    name: "quit",
                    value: "quit"
                }  
            ]

        }
    ]) .then(response =>  {
        switch (response.userChoice) {
            case "search_for_employee":
                searchEmployee();
                break;

            case "add_employee":
                addEmployee();
                break;
            
            case "edit_employee":
                editEmployee();
                break;
            
            case "remove_employee":
                removeEmployee();
                break;

            default: 
                quit();
        }
    })


}

//Function to search and return employee
const searchEmployee = () => {
    inquirer
    .prompt({
        name: "employee",
        type: "input",
        message: "Which employee would you like to search for?",
    })
    .then((response) => {
        const query = 'SELECT first_name, last_name FROM employee WHERE ?';
        connection.query(query, { first_name: response.first_name, last_name: response.last_name}, (err, res) => {
            res.forEach(({ first_name, last_name }) => {
                console.log(
                    `First Name: ${first_name} || Last Name: ${last_name}`
                );
            });
            mainPrompt();
        });
    });

};

const addEmployee = () => {
    console.log('adding a new employee');
    const query = connection.query(query, 'SELECT * FROM employee', (err, res) => {
        if (err) throw err;
        inquirer
        .prompt([
            {
                name: "emp_first_name",
                type: "input",
                message: "What is the employee's first name?",
            },
            {
                name: "emp_last_name",
                type: "input",
                message: "What is the employee's last name?",
            },
        ])
        .then((response) => {
            const query = 'INSERT INTO employee SET ?';
            connection.query(query, { first_name: response.first_name, last_name: response.last_name}, (err, res) => {
                res.forEach(({ first_name, last_name }) => {
                    console.log(
                        `First Name: ${first_name} and Last Name: ${last_name} were inserted!\n`
                    );
                });
                addEmployee();
            });
        });
    });
};
function editEmployee() {
    console.log("edit employee");
};

function removeEmployee() {
    console.log('remove employee');
};

function quit() {
    console.log('all done')
    process.exit();
};

mainPrompt();

















// connection.connect(function (err) {  
//     if (err) throw err;
// });

// connection.query('SELECT * FROM employee_db', function (err, results) {
//     console.log(results);
// });

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

