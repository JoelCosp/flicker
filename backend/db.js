// db.js file

// Mysql connection configuration

const mysql = require('mysql2/promise');

// create the connection to database
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "flicker",
    multipleStatements: true,
    charset: "utf8mb4",
    decimalNumbers: true,
});

pool.getConnection()
  .then(conn => {
    const res = conn.query('SELECT 1');
    conn.release();
    return res;
  }).then(results => {
    console.log('Connected to MySQL DB');
  }).catch(err => {
    console.log(err); 
  });

  
  module.exports = pool