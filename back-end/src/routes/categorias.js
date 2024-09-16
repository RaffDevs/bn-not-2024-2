import { Router } from "express"
import controller from "../controllers/categorias.js"

const router = Router()
router.post("/categorias", controller.create)
router.get("/categorias", controller.retrieveAll)
router.get("/categorias/:id", controller.retriveOne)

export default router