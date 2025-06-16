import { tipo } from "../models/tipo.model.js"

//obtener todos los tipos
export const getTipos = async (req, res) => {
    try {
        const allTipos = await tipo.findAll({
            order: [['id', 'ASC']]
        });
        res.json(allTipos);
    } catch (error) {
        res.status(500).json({
            message: "erro al optener los datos"
        })
    }
}

export const crearTipo = async (req, res) => {
    const { nombre } = req.body
    try {
        if (!nombre) {
            return res.status(400).json({ message: "los datos son obligatorios" });
        }
        const nuevo = await tipo.create({
            nombre
        });
        if (nuevo) {
            res.status(200).json("tipo creado correctamente")
        }
    } catch (error) {
        res.status(500).json("error al crear el tipo"+error)
    }
}

export const eliminarTipo = async (req,res)=>{
    const {id } = req.params;
    try {
        const tipoEliminado = await tipo.destroy({
            where: {
                id : id
            }
        })
        if (!tipoEliminado) {
            res.status(402).json({
                message: "tipo no encontrado"
            })
        }
        res.status(200).json({
            message: "tipo eliminado correctamente"
        })
    } catch (error) {
        res.status(500).json({
            message: "error al eliminar el tipo"
        })
    }
}

export const actualizarTipo = async (req,res)=>{
    const {id } = req.params;
    const { nombre } = req.body;
    try {
        const tipoActualizado = await tipo.update({
            id,
            nombre
        }, {
            where: {
                id: id
            }
        });
        if (!tipoActualizado) {
            return res.status(404).json({
                message: "tipo no encontrado"
            });
        }
        res.status(200).json({
            message: "tipo actualizado correctamente"
        });
    } catch (error) {
        
    }
}