# 12 SQL: Employee Tracker - (My-workplace)

## My Task

Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called **content management systems (CMS)**. Your assignment this week is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

Because this Challenge will require the use of the `Inquirer` package, ensure that you install and use Inquirer version 8.2.4. To do so, use the following command in your project folder: `npm i inquirer@8.2.4`.

Because this application won’t be deployed, you’ll also need to create a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met. You’ll need to submit a link to the video and add it to the README of your project.

## Links

video - https://youtu.be/tOh6ITJfl28
repo (github) - https://github.com/eecmanny/My-workplace

repo (heroku) - 


## User Story

```md
A business owner wants to be able to view and manage the departments, roles, and employees in my company
so that he can organize and plan his business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input. - (Inquire packages)

WHEN I start the application

THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role. - (Inquire and mysql2 packages)

WHEN I choose to view all departments. - (queries, Inquire and mysql2 packages)

THEN I am presented with a formatted table showing department names and department ids - (queries, Inquire and mysql2 packages)

WHEN I choose to view all roles - (queries, Inquire and mysql2 packages)

THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role - (queries, Inquire and mysql2 packages)

WHEN I choose to view all employees - (queries, Inquire and mysql2 packages)

THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to - (queries, Inquire and mysql2 packages)

WHEN I choose to add a department - (queries, Inquire and mysql2 packages)

THEN I am prompted to enter the name of the department and that department is added to the database - (queries, Inquire and mysql2 packages)

WHEN I choose to add a role - (queries, Inquire and mysql2 packages)

THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database - (queries, Inquire and mysql2 packages)

WHEN I choose to add an employee - (queries, Inquire and mysql2 packages)

THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database - (queries, Inquire and mysql2 packages)

WHEN I choose to update an employee role - (queries, Inquire and mysql2 packages)

THEN I am prompted to select an employee to update and their new role and this information is updated in the database. - (queries, Inquire and mysql2 packages)
```


## Resources

I received help from my Instructors, and TA and tutor helps on the routes. I also a group studies session w/ 2 other students and Jen helped me with the inquire functions.
