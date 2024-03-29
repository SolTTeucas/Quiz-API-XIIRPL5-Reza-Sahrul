const dbConfig = require('../config/db');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAlias: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        },
    });
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//define semua models yang ada pada aplikasi
db.quizzes = require('./quiz')(sequelize, Sequelize);
module.exports = db;
Sequelize.STRING                        //VARCHAR(255)
Sequelize.STRING(1234)                  //VARCHAR(1234)
Sequelize.STRING.BINARY                 //VARCHAR BINARY
Sequelize.TEXT                          //TEXT
Sequelize.TEXT('tiny')                  //TINYTEXT
Sequelize.INTEGER                       //INTEGER
Sequelize.BIGINT                        //BIGINT
Sequelize.BIGINT(11)                    //BIGINT(11)
Sequelize.FLOAT                         //FLOAT
Sequelize.FLOAT(11)                     //FLOAT(11)
Sequelize.FLOAT(11, 10)                 //FLOAT(11, 10)
Sequelize.DOUBLE                        //DOUBLE
Sequelize.DOUBLE(11)                    //DOUBLE(11)
Sequelize.DOUBLE(11, 10)                //DOUBLE(11, 10)
Sequelize.DECIMAL                       //DECIMAL
Sequelize.DECIMAL(10, 2)                //DECIMAL(10, 2)
Sequelize.DATEONLY                      //DATE without time.
Sequelize.BOOLEAN                       //TINYINT(1)
Sequelize.ENUM('value 1', 'value 2')
Sequelize.JSON                          //JSON