const Sequelize = require('sequelize');
require('dotenv').config();
const mysql = require('mysql2');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;

// // Connect to database
// const db = mysql.createConnection(
//   {
//     host: '127.0.0.1',
//     // MySQL username,
//     user: 'root',
//     // TODO: Add MySQL password here
//     password: '!QAZ0okm',
//     database: 'myCompany_db'
//   },
//   console.log(`Connected to the myCompany_db database.`)
// );