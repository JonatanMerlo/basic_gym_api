import { Router } from "express";

import { create, getById, remove, update} from "../controllers/userController.js";


const router = Router()


router.get('/:id',getById)

router.post('/',create)

router.put('/:id', update)

router.delete('/:id',remove)

export default router;