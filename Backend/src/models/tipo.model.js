import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const tipo =  sequelize.define('tipo',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true 
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps : false
})