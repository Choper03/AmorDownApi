const { Sequelize } = require('sequelize');
const mysql = require('mysql2')
require('dotenv').config();
const {DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME,
    DB_PORT} = process.env;

const sequelize = new Sequelize(`mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`); 

const connection = mysql.createConnection(`mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`); 

 sequelize.authenticate().then(() => {
  console.log('Conexion satisfactoria a mysql');
}).catch((error) => {
  console.error('no se pudo conectar ', error);
});

module.exports = {sequelize, connection};
