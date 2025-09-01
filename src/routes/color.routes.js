import { Router } from "express";
import { borrarColorPorId, crearColor, editarColorPorId, leerColores, leerColorPorId, test } from "../controllers/colores.controllers.js";
import validacionColor from "../middlewares/validarColores.js";

const router = Router();

router.route('/test').get(test)
router.route('/').get(leerColores).post(validacionColor, crearColor)
router.route('/:id').get(leerColorPorId).delete(borrarColorPorId).put(editarColorPorId)

export default router;