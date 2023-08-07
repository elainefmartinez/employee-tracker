// Import and require insquirer and mysql2
const inquirer = require('inquirer');
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        //MySQL password here
        password: 'abcd90$$',
        //name of database we are using
        database: 'employee_db'
    });

console.log(`Connected to the employee database.`)
//WHEN I start the application
start();
//THEN I am presented with the following:
function start() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'menu',
            choices: ['View All Department', 'View All Roles', 'View All Employees', 'Add A Department', 'Add A Role', 'Add An Employee', 'Update Employee Role']
        }
        //VIEW ALL DEPARTMENTS
    ]).then((response) => {
        if (response.menu === 'View All Department') {
            db.query(`SELECT * FROM department`, (err, res) => {
                if (err) throw err;
                console.table(res);
                start();
            });


            //VIEW ALL ROLES
        } else if (response.menu === `View All Roles`) {
            db.query(`SELECT * FROM roles`, (err, res) => {
                if (err) throw err;
                console.table(res);
                start();
            });

            //VIEW ALL EMPLOYEES
        } else if (response.menu === `View All Employees`) {
            db.query(`SELECT * FROM employee`, (err, res) => {
                if (err) throw err;
                console.table(res);
                start();
            });
            //ADD A DEPARTMENT
        } else if (response.menu === `Add A Department`) {
            inquirer.prompt([{
                type: `input`,
                message: `What is the name of the department?`,
                name: `department`,
            }]).then((response) => {
                db.query(`INSERT INTO department(department_name) VALUES('${response.department}');`)
                console.log('New Department Added!');
                start();
            });
            //ADD A ROLE
        } else if (response.menu === `Add A Role`) {
            inquirer.prompt([{
                type: `input`,
                message: `What is the name of the role?`,
                name: `title`,
            },
            {
                type: `input`,
                message: `What is the salary of the role?`,
                name: `salary`,
            },
            {
                type: `list`,
                message: `Which Department does the role belong to`,
                name: `department`,
                choices: [`Sales`, `Engineering`, `Finance`, `Legal`]
            }
            ]).then((response) => {
                db.query(`INSERT INTO roles(title,salary) VALUES('${response.title}','${response.salary}');`)
                console.log('New Role Added!');
                start();
            });

            //ADD AN EMPLOYEE
        } else if (response.menu === `Add An Employee`) {
            inquirer.prompt([{
                type: `input`,
                message: `What is the employees first name?`,
                name: `firstName`,
            },
            {
                type: `input`,
                message: `What is the employees last name?`,
                name: `lastName`,
            },
            

            ]).then ((response) => {
                db.query(`INSERT INTO employee (first_name, last_name) VALUES ('${response.firstName}','${response.lastName}');`)
                console.log('New Employee Added!');
                start();
            });
        };
});
            
            
            
            
           /* .then((name_response) => {
                db.query(`SELECT * FROM roles`, (err, res) => {
                    if (err) throw err;
                    var roles = res;
                    console.log(roles);
                    inquirer.prompt([
                        {
                            type: `list`,
                            message: `Which role do they belong?`,
                            name: `role_id`,
                            choices: roles,
                        }
                    ]).then((role_response) => {
                        db.query(`INSERT INTO employee (first_name, last_name, role_id ) VALUES('${name_response.firstName}','${name_response.lastName}', '${role_response.role_id}');`)
                        console.log('New Employee Added!');
                        start();

                    })
                });


            });*/
};

    




//WHEN I choose to update an employee role
//THEN I am prompted to select an employee to update and their new role and this information is updated in the database
/*else if (response.menu === `Update Employee Role`) {
    inquirer.prompt([{
        type: `list`,
        message: `Which employee's role do you want to update?`,
        name: `update_employee`,
        choices:[]
    },
    {   type: `list`,
        message: `Which role do you want to assign the selected employee?`,
        name: `update_role`,
        choices:[]
    },
    {
        type: `list`,
        message:`Who will be this empoloyee's manager?`,
        name: `update_manager`
        choice:[]
    },

]).then((response) => {
        db.query(`UPDATE employee SET role_id = ${response.update_role} , manager_id ${response.update_manager} WHERE id = ${response.employee};`)
        console.log('Employee Role Updated!');
        start();
)}*/
