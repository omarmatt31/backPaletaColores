import Color from "../models/color.js"

export const test = (req, res)=>{
    res.status(200)
    res.send('Primera prueba desde el backend')
}

export const leerColores =async(req, res)=>{


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