DROP DATABASE IF EXISTS myCompany_db;
CREATE DATABASE myCompany_db;

USE myCompany_db;

CREATE TABLE department (
  id INT NOT NULL PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
);

CREATE TABLE employeeRole (
    id INT NOT NULL PRIMARY KEY,
    department_id INT,
    title VARCHAR(30) NOT NULL
    salary DECIMAL
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    role_id INT,
    manager_id INT,
    first_name VARCHAR(40) NOT NULL
    last_name VARCHAR(50) NOT NULL
    FOREIGN KEY (employeeRole_id)
    REFERENCES employeeRole(id)
    ON DELETE SET NULL
);


-- CREATE TABLE customers (
--   id INT NOT NULL,
--   first_name VARCHAR(30),
--   last_name VARCHAR(30),
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE customer_order (
--   id INT,
--   customer_id INT,
--   order_details TEXT,
--   FOREIGN KEY (customer_id)
--   REFERENCES customers(id)
--   ON DELETE SET NULL
-- );
