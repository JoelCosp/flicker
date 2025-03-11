// Cargamos variables de entorno
require('dotenv').config();
// Importamos libreria de MYSQL
const mysql = require('mysql2');
// Creamos conexion con la BBDD usando las variables de entorno
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});
// Conectamos a la BBDD
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database!');
});
// Exportamos la conexion para poder usarla en otros archivos
module.exports = connection;