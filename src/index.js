import express from "express";

import ejerciceRoutes from './routes/ejerciceRoutes.js'
import routineRoutes from './routes/routineRoutes.js'
import seriesRoutes from './routes/seriesRoutes.js'
import userRoutes from './routes/userRoutes.js'

const app = express()
app.use(express.json())


app.use('/api', ejerciceRoutes)
app.use('/api', routineRoutes)
app.use('/api', seriesRoutes)
app.use('/api', userRoutes)


app.listen(3000)
