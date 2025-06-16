import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";



export const Product = sequelize.define('products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    talla: {
        type: DataTypes.STRING,
        allowNull: true
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'tipos', 
            key: 'id'
        }
    }
},{
    timestamps : false
}
)

//relacion entre tipo y productos
import {tipo} from "./tipo.model.js";

Product.belongsTo(tipo, {
    foreignKey: 'tipoId'
});

tipo.hasMany(Product, {
    foreignKey: 'tipoId'
});