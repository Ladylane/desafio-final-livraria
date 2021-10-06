import Sequelize from "sequelize";

const sequelize= new Sequelize(
     "postgres://uvhdqplu:LZArsfuahf0dnZBYtijc7r-8y9NILE2m@fanny.db.elephantsql.com/uvhdqplu",

    
    {
        dialect: "postgress",
        define:{
            timestamps: false
        }
    }
)

export default sequelize;