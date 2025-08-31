import { Router } from "express";
import { borrarColorPorId, crearColor, leerColores, leerColorPorId, test } from "../controllers/colores.controllers.js";

const router = Router();

router.route('/test').get(test)
router.route('/').get(leerColores).post(crearColor)
router.route('/:id').get(leerColorPorId).delete(borrarColorPorId)

export default router;