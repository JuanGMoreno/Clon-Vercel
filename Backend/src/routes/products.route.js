import { Router } from 'express';
import { createProduct, deleteProduct, getProducts } from '../controllers/products.controller.js';
import { upload } from '../utils/multer.js';
export const routerProduct = Router()

//obtener todos los productos
routerProduct.get('/products',getProducts)
//crear un producto 
routerProduct.post('/products', upload.array('imagenes', 5),createProduct)
//eliminar un producto 
routerProduct.delete('/products/:id', deleteProduct)