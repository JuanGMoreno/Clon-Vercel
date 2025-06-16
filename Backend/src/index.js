
import app from './app.js';
import { sequelize } from './database/database.js';
import './models/imagenes_producto.js'
import './models/products.model.js'
import './models/tipo.model.js'
  

async function main() {
    try {
        await sequelize.sync({force : true});
        app.listen(3000);
        console.log("the server run on the port 3000")
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();



