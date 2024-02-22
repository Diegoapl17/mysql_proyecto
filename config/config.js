const { Sequelize }= require('sequelize');

const db = new Sequelize({
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: '',
    database: 'motors_up',
    logging: false,
    define: {
        timestamps: false
    }
});



module.exports = db;
