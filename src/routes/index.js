import {Router} from "express";

import exerciseRoutes from './exerciseRoutes.js'
import routineRoutes from './routineRoutes.js'
import seriesRoutes from './seriesRoutes.js'
import userRoutes from './userRoutes.js'

const router = Router()

router.use('/exercise', exerciseRoutes)
router.use('/routine', routineRoutes)
router.use('/serie', seriesRoutes)
router.use('/user', userRoutes)



export default router;