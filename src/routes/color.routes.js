import { Router } from "express";
import { crearColor, leerColores, test } from "../controllers/colores.controllers.js";

const router = Router();

router.route('/test').get(test)
router.route('/').get(leerColores).post(crearColor)

export default router;