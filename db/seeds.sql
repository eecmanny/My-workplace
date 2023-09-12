INSERT INTO department (department_name)
VALUES ("Sales"),
       ("RD"),
       ("Manufacturing"),
       ("Shipping");
   

INSERT INTO role (title, salary, department_id)
VALUES ("CEO", 250000.00, 1),
       ("General Manager", 125000.00, 2),
       ("Supervisor", 85000.00, 3),
       ("Engineer", 70000.00, 3),
       ("Technician", 65000.00, 4);



INSERT INTO employee (role_id, first_name, last_name, manager_id)
VALUES (1, "Manny", "Cordero", NULL),
       (2, "Micheal", "Angelo", 1 ),
       (3, "Leonardo", "Davinci", 1),
       (4, "Simon", "Cowell", 1),
       (3, "Lenerd", "Nemoi", NULL),
       (5, "Jane", "Doe", NULL),
       (4, "Chris", "Smith", NULL),
       (4, "Jen", "Smith", 1),
       (5, "Rick", "Sanchez", NULL),
       (3, "David", "Schitts", 2),
       (3, "John", "Connor", NULL),
       (2, "Alexus", "Schitts", NULL);

