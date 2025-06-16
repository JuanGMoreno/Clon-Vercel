import { Product } from "../models/products.model.js"
import { tipo } from "../models/tipo.model.js";
import { ImagenProducto } from "../models/imagenes_producto.js";

//mostrar todos los productos
export const getProducts = async (req, res) => {
    try {
        const productos = await Product.findAll({
            include: [
                {
                    model: ImagenProducto,
                    attributes: ['id', 'url'],
                },
                {
                    model: tipo,
                    attributes: ['id', 'nombre'], // opcional, si quieres el tipo también
                },
            ],
        });

        res.json(productos);
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ mensaje: 'Error del servidor' });
    }
}
//mosatrar tods los productos por tipo 
export const getProductsByType = async (req, res) => {
    const { tipoId } = req.params;
    try {
        if (!tipoId) {
            return res.status(400).json({
                message: "El ID del tipo es obligatorio"
            });
        }
        const products = await Product.findAll({
            where: {
                tipoId: tipoId
            }
        });
        if (products.length === 0) {
            return res.status(404).json({
                message: "No se encontraron productos para este tipo"
            });
        }
        res.json({
            message: "Productos obtenidos correctamente",
            data: products
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los productos por tipo",
            error: error.message
        });
    }
}

//Agregar un producto 
export const createProduct = async (req, res) => {
    const { nombre, precio, color, descripcion, talla, cantidad, tipoId } = req.body;
    try {
        //crear el producto en la tabla
        if (!nombre || !precio || !color || !descripcion || !talla || !cantidad || !tipoId) {
            return res.status(400).json({
                message: "Todos los campos son obligatorios"
            });
        }
        const tipoExists = await tipo.findByPk(tipoId);
        if (!tipoExists) {
            return res.status(404).json({
                message: "Tipo no encontrado"
            });
        }
        const newProduct = await Product.create({
            nombre,
            precio,
            color,
            descripcion,
            talla,
            cantidad,
            tipoId
        });
        //agregar las fotos a la tabla 

        for (const file of req.files) {
            await ImagenProducto.create({
                url: `/uploads/${file.filename}`,
                producto_id: newProduct.id
            });
        }

        res.json({
            message: "Producto creado correctamente",
            data: newProduct
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al crear el producto",
            error: error.message
        });
    }
}

//eliminar un producto
export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        if (!id) {
            return res.status(404).json({ message: "no se encotro el producto" })
        }
        const isDelete =await Product.destroy({
            where: {
                id: id
            }
        })
        if(!isDelete){
            return res.status(404).json({
                message: "Producto no encontrado"
            });
        }
        res.sendStatus(204)
    } catch (error) {
        res.status(500).json({
            message: "Error al borrar el producto",
            error: error.message
        });
    }

}
