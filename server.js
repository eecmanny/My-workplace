const express = require('express');
// const sequelize = require('./config/connection')
const mysql = require('mysql2');
const inquirer = require('inquirer');
const fs = require('fs');


const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: '127.0.0.1',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: '!QAZ0okm',
    database: 'myCompany_db'
  },
  console.log(`Connected to the myCompany_db database.`)
);

function SearchSQL() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'databaseSelection',
        message: 'What would you like to do?',
        choices: [
          'View all department',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          //enter name, salary, department
          'Add an employee',
          //enter first name, last name, role, manager, department
          'Update an employee role',
          // Assign new Role

          // //Extra//
          // 'Update employee managers',
          // 'View employees by manager.',
          // 'View employees by department.',
          // 'Delete departments, roles, and employees.',
          // 'View the total utilized budget of a department—in other words, the combined salaries of all employees in that department.',
        ],
      },
    ])
    .then((answers) => {
      switch (answers.databaseSelection) {
        case 'View all departments':
          viewAllDepartments();
          break;

        case 'View all roles':
          viewAllRoles();
          break;

        case 'View all employees':
          viewAllEmployees();
          break;

        case 'Add a department':
          addDepartment();
          break;

        case 'Add a role':
          addRole();
          break;

        case 'Add an employee':
          addEmployee();
          break;

        case 'Update an employee role':
          updateRole();
          break;
      }
      // const companyDatabse = SearchSQL(answers);
    });
}

function viewAllDepartments() {
  db.promise().query('SELECT department.department_name, department.id FROM department')
    .then(function ([rows]) {
      let departments = rows;
      console.table(departments);
      SearchSQL();
    })
    .catch(function (error) {
      console.error('Error fetching departments:', error);
      SearchSQL();
    });

}

//     function viewAllDepartments() {
//     db.promise().query('SELECT department.department_name, department.id FROM department', function (err, results) {
//       console.log(results);
//     });
// }

// function viewAllDepartments() {
//   db.promise().query('SELECT * FROM department')
//     .then(function ([rows]) {
//       let departments = rows;
//       console.table(departments);
//       SearchSQL();
//     })
//     // .catch(function (error) {
//     //   console.error('Error fetching departments:', error);
//     //   SearchSQL();
//     // });
// }



function viewAllRoles() {
  db.promise().query('SELECT role.title, role.id, department_id, role.salary FROM role INNER JOIN department ON role.department_id = department_id')
    .then(function ([rowsRole]) {
      let roles = rowsRole;
      console.table(roles);
      SearchSQL();
    })
}

function viewAllEmployees() {
  db.promise().query('SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, department_id, role.salary, employee.manager_id FROM employee INNER JOIN role ON employee.role_id = role.id')
    .then(function ([rowsEmployee]) {
      let employeesEl = rowsEmployee;
      console.table(employeesEl);
      SearchSQL();
    })
}

// // Function add a department
// function addDepartment() {
//   inquirer.prompt([
//     {
//       type: 'input',
//       message: 'Please enter the name of the department.',
//       name: 'name'
//     }
//   ])

//     .then((answers) => {
//       db.query('INSERT INTO department (department_name) VALUES (?)', [answers.name]);
//       console.log('Department has been added.');
//       SearchSQL();
//     });
// };

// // Function add a role
// function addRole() {
//   inquirer.prompt([
//     {
//       type: 'input',
//       message: 'Please enter the name of the role.',
//       name: 'title'
//     },

//     {
//       type: 'input',
//       message: 'Please enter the salary.',
//       name: 'salary'
//     },

//     {
//       type: 'input',
//       message: 'Please enter ID of the department.',
//       name: 'department_id'
//     }
//   ])

//     .then((answers) => {
//       // db.query('INSERT INTO role (title, salary, department_id) VALUES (answers.title, answers.salary, answers.department_id)', [answers.title, answers.salary, answers.department_id]);
//       db.promise().query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [answers.title, answers.salary, answers.department_id]);
//       console.log('Role has been added.');
//       SearchSQL();
//     });
// };

// // Function add an employee
// function addEmployee() {
//   inquirer.prompt([
//     {
//       type: 'input',
//       message: 'Please enter the first name of the employee.',
//       name: 'first_name'
//     },

//     {
//       type: 'input',
//       message: 'Please enter the last name of the employee.',
//       name: 'last_name'
//     },

//     {
//       type: 'input',
//       message: 'Please enter the role of the employee.',
//       name: 'role_id'
//     },

//     {
//       type: 'input',
//       message: 'Please enter the id for the manager of the employee.',
//       name: 'manager_id'
//     }
//   ])

//     .then((answers) => {
//       // db.query('INSERT INTO role (first_name, last_name, role_id, manager_id) VALUES (answers.first_name, answers.last_name, answers.role_id, answers.manager_id)', [answers.first_name, answers.last_name, answers.role_id, answers.manager_id]);
//       db.promise().query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [answers.first_name, answers.last_name, answers.role_id, answers.manager_id]);
//       console.log('Employee has been added.');
//       SearchSQL();
//     });
// };

// // Function to update an employee's role
// function updateRole() {
//   db.query('SELECT CONCAT(employee.first_name, " ", employee.last_name) AS full_name, employee.id AS employee_id, role.* FROM employee INNER JOIN role ON employee.role_id = role.id',
//     function (err, results) {
//       if (err) throw err;

//       let employeesEl = results.map(employee => ({
//         full_name: employee.full_name,
//         id: employee.employee_id,
//         value: [employee.full_name, employee.employee_id]
//       }))

//       let rolesEl = results.map(role => ({
//         title: role.title,
//         id: role.id,
//         value: [role.title, role.id]
//       }));

//       console.log(employeesEl)

//       inquirer.prompt([
//         {
//           type: 'list',
//           name: 'employee',
//           choices: employeesEl,
//           message: 'Please select one of the following employees:'
//         },

//         {
//           type: 'list',
//           name: 'choosenRole',
//           choices: rolesEl,
//           message: 'Please enter the new role of the employee.'
//         }
//       ])
//         .then((answer) => {
//           let updateId = answer.employee[1];
//           let updatedRole = answer.choosenRole[1];
//           db.query(`UPDATE employee SET role_id = ${updatedRole} WHERE id = ${updateId};`,
//             function (err, results) {
//               if (err) {
//                 throw err
//               }
//               console.table(results);
//               SearchSQL();
//             })
//         }
//         )
//     })
// };

// Call function to initialize app
SearchSQL();


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
