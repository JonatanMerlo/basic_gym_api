import express from "express";
import cluster from "cluster";
import os from 'os'

import ejerciceRoutes from './routes/ejerciceRoutes.js'
import routineRoutes from './routes/routineRoutes.js'
import seriesRoutes from './routes/seriesRoutes.js'
import userRoutes from './routes/userRoutes.js'


var port = process.env.PORT || '3000';
const app = express()


app.use(express.json())

app.use('/api', ejerciceRoutes)
app.use('/api', routineRoutes)
app.use('/api', seriesRoutes)
app.use('/api', userRoutes)

app.set('port', port);

if (cluster.isPrimary) {

    let cpuCount = os.cpus().length

    for (let i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }
} else {
    app.listen(port)
    console.log("Server started.");
}

