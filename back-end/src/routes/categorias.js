import { Router } from "express"
import controller from "../controllers/categorias.js"

const router = Router()
router.post("/categorias", controller.create)

export default router