const Sequelize = require('sequelize')
const PersonModel = require('./models/person')
const GameModel=require('./models/game')
const PlatformModel=require('./models/platform')
const MultimediaModel=require('./models/multimedia')
<<<<<<< HEAD
const CategoryModel=require('./models/category')
=======
>>>>>>> 32433f2fb164ceccc3988af872d8e4e41b7e9467

const sequelize = new Sequelize(process.env.DB_SCHEMA, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

const Person = PersonModel(sequelize, Sequelize)
const Game = GameModel(sequelize, Sequelize)
const Platform = PlatformModel(sequelize, Sequelize)
const Multimedia = MultimediaModel(sequelize, Sequelize)
<<<<<<< HEAD
const Category = CategoryModel(sequelize, Sequelize)
=======
>>>>>>> 32433f2fb164ceccc3988af872d8e4e41b7e9467

sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established")
    })
    .catch(err => {
        console.error("Unable to connect", err)
    })

module.exports = {
    Person,
    Game,
    Platform,
<<<<<<< HEAD
    Multimedia,
    Category
=======
    Multimedia
>>>>>>> 32433f2fb164ceccc3988af872d8e4e41b7e9467
}