USE employee_db;

INSERT INTO department (id, name)
VALUES (1,"Human Resources"), (2,"Accounting"), (3,"Technology"), (4,"Customer Service"), (5,"Business Dev");


INSERT INTO employee (first_name, last_name)
VALUES ("Alyson","Orta"), ("Joe", "Bob"), ("Sally", "Smith");


INSERT INTO employee_role (title, salary, department_id)
VALUES ("Manager", 75000.00, ), ("Human Resources Associate", 60000.00, ), ("Accountant", 70000.00, ), ("Software Developer", 95000.00, ) ("Customer Service Rep", 45000.00, ), ("Sales", 55000.00, );
