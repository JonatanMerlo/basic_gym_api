import { Router } from "express";
import prisma  from "../db.js";


const router = Router()


router.get('/serie/:id', async (req, res) => {
    
    const serieId = parseInt(req.params.id);

    if (isNaN(serieId)) {
        return res.status(400).json({"error": "Invalid ID. ID should be a number."});
    }

    const serieFound = await prisma.serie.findFirst({
        where:{
            id: serieId
        },
        include: {
            ejercices: true,
        }
    })
    
    if(!serieFound){
        return res.status(404).json({"error": "Not Found"})
    }

    
    res.json(serieFound)
    
})

router.post('/serie', async (req, res) => {

    const newserie = await prisma.serie.create({
        data: req.body
    })
    res.json(newserie)
    
})

router.put('/serie/:id', async (req, res) => {
        
    const serieId = parseInt(req.params.id);

    if (isNaN(serieId)) {
        return res.status(400).json({"error": "Invalid ID. ID should be a number."});
    }

    const serieUpdate = await prisma.serie.update({
        where:{
            id: serieId
        },
        data:req.body
    })

    if(!serieFound){
        return res.status(404).json({"error": "Not Found"})
    }

    res.json(serieUpdate)

})

router.delete('/serie/:id', async (req, res) => {
    const serieId = parseInt(req.params.id);

    if (isNaN(serieId)) {
        return res.status(400).json({"error": "Invalid ID. ID should be a number."});
    }
    const serieDeleted = await prisma.serie.delete({
        where:{
            id: serieId
        }
    })

    if(!serieDeleted){
        return res.status(404).json({"error": "Not Found"})
    }

    res.json(serieDeleted)

})

export default router;