
import Sequelize from 'sequelize';

//conexion con la base de datos 


//DB_NAME,DB_USER_NAME,DB_PASSWORD,
export const sequelize = new Sequelize('store-vercel', 'postgres', 'admin', {
    host: "localhost",
    dialect: "postgres"
})