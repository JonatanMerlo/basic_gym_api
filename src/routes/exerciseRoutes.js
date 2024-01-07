import { Router } from "express";
import { getById, create, update, remove } from "../controllers/exerciseController.js";

const router = Router()



router.get('/:id', getById)

router.post('/', create)

router.put('/:id', update)

router.delete('/:id', remove)

export default router;