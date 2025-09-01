import {body} from "express-validator"
import resultadoValidacion from "./resultadoValidacion.js";

const validacionColor = [
    body("codigoColor")
    .notEmpty()
    .withMessage("El codigodel color es obligatorio")
    .isLength({ min: 7, max: 7 })
    .withMessage("El color debe tener entre 7 caracteres")
    .matches(/^#([A-Fa-f0-9]{6})$/)
    .withMessage("El codigo de color no es valido"),
    (req, res, next) => resultadoValidacion(req, res, next),
]

export default validacionColor;