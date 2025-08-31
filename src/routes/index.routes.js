import colorRouter from "./color.routes.js";
import { Router } from "express";

const router = Router();

router.use('/colores', colorRouter)

export default router;