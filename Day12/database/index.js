const {Sequelize} = require("sequelize")

const sequelize = new Sequelize(
    "postgres",
    "postgres",
    "12345678",
    {
        host:"localhost",
        dialect:"postgres"
    }
)

sequelize.sync();

(async()=>{
       try{
           await sequelize.authenticate();
           console.log("Connection with Database succesful")

       }catch(err){
           console.error("Connection with database failed")
       }
})()

module.exports= sequelize