import express from "express";
import routes from './routes/index.js'


var port = process.env.PORT || '3000';
const app = express()

app.use(express.json())

app.use('/api', routes)

app.set('/port', port)


app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})