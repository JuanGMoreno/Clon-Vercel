
import express from 'express';
import { routerProduct } from './routes/products.route.js';
import path from 'path';
import { routerTipo } from './routes/tipos.route.js';


const app = express();

//middlewares
app.use(express.json());
app.use('/uploads', express.static(path.resolve('./uploads')));
app.use(express.json())

//rutas
app.use(routerProduct)
app.use(routerTipo)



export default app