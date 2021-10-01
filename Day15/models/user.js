const {DataTypes} = require('sequelize')
const sequelize = require('../database')


const User = sequelize.define('User',{
        fullName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },

        password:{
            type:DataTypes.STRING,
            allowNull:false
        },

     role:{
             type:DataTypes.STRING,
             
        }

})

module.exports = User