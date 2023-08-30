SELECT *
FROM myCompany_db;

SELECT title,salary, department_id, department_name
FROM role
LEFT JOIN department
ON role.department_id = department.id;


SELECT first_name,last_name, role_id, manager_id, title,salary, department_id, department_name
FROM employee
LEFT JOIN role
ON employee.role_id = role.id
LEFT JOIN department
ON role.department_id = department.id;


-- JOIN student_course
--   ON student.id = student_course.student_id
-- JOIN course
--   ON course.id = student_course.course_id;