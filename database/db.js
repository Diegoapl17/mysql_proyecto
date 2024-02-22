const mysql = require('mysql');

// const conexion = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'motors_up'
// });

// conexion.connect((error)=>{
//     if (error) {
//         console.error('El error de conexion es: '+error);
//         return
//     }
//     console.log('Conectado a motors up')
// })

const mysql = require('mysql2/promise');
const config = require('config');

const DB_HOST = config.get('DB_HOST');
const DB_PORT = config.get('DB_PORT');
const DB_NAME = config.get('DB_NAME');
const DB_USERNAME = config.get('DB_USERNAME');
const DB_USERNAME_PASSWORD = config.get('DB_USERNAME_PASSWORD');

const connectionOptions = {
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
    user: DB_USERNAME,
    password: DB_USERNAME_PASSWORD,
};

const pool = mysql.createPool(connectionOptions);

const connectToMySQL = async () => {
    try {
        await pool.getConnection();

        console.log('MySQL database connected!');
    } catch (err) {
        console.log('MySQL database connection error!');

        process.exit(1);
    }
};

connectToMySQL().then();

module.exports = pool;