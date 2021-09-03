//Dependencies
const inquirer = require('inquirer');
const db = require('./db');
// const db = require('./db');
// const cTable = require ('console.table');





function mainPrompt () {
    inquirer
    .prompt ([
        {
            type: "list", 
            name: "action", 
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
        var userChoice = response.action;

        switch (userChoice) {
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

function searchEmployee() {
    console.log("search employee");
};

function addEmployee() {
    console.log('add employee');
// .then(role => {

// })
//     db.addEmployee
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

