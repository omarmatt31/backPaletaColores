import Color from "../models/color.js"

export const test = (req, res)=>{
    res.status(200)
    res.send('Primera prueba desde el backend')
}

export const leerColores =async(req, res)=>{
    try{
        //1- Buscar todos los productos en la base de datos
        const listaColores = await Color.find()
        //2- enviar la respuesta al front
        res.status(200).json(listaColores)
    }catch(error){
        console.error(error)
        res.status(500).json({mensaje: 'Error al leer los colores'})
    }
}

export const crearColor = async (req, res)=>{
    try{
        console.log(req.body);
        const nuevoColor = new Color(req.body);
        await nuevoColor.save();
        res.status(201).json({mensaje: 'El color fue creado exitosamente'})
    }catch(error){
        console.error(error)
        res.status(500).json({mensaje: 'Error al crear el color'})
    }
}

export const leerColorPorId = async(req, res)=>{
    try{
        const colorBuscado = await Color.findById(req.params.id)
        if(!colorBuscado){
            return res.status(404).json({mensaje: 'Color no encontrado'})
        }
        res.status(200).json(colorBuscado)
    }catch(error){
        console.error(error)
        res.status(500).json({mensaje: 'Error al obtener el color'})
    }
}

export const borrarColorPorId = async(req, res)=>{
    try{
        const colorEliminado = await Color.findByIdAndDelete(req.params.id)
        if(!colorEliminado){
            return res.status(404).json({mensaje: 'Color no encontrado'})
        }
        res.status(200).json({mensaje: 'Color eliminado exitosamente'})
    }catch(error){
        console.error(error)
        res.status(500).json({mensaje: 'Error al eliminar el color'})
    }
}