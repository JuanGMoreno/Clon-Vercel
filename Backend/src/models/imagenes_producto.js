import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const ImagenProducto = sequelize.define('imagen_producto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    url: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    es_principal: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: false
});
//relacion entre imagenes y productos
import { Product } from './products.model.js';

Product.hasMany(ImagenProducto, { foreignKey: 'producto_id' });
ImagenProducto.belongsTo(Product, { foreignKey: 'producto_id' });


