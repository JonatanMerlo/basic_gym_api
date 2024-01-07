import { Router } from "express";
import prisma  from "../db.js";

const router = Router()



router.get('/ejercice/:id', async (req, res) => {
    
    const exerciseId = parseInt(req.params.id);

    if (isNaN(exerciseId)) {
        return res.status(400).json({"error": "Invalid ID. ID should be a number."});
    }

    const ejerciceFound = await prisma.ejercice.findFirst({
        where:{
            id: exerciseId
        }
    })
    
    if(!ejerciceFound){
        return res.status(404).json({"error": "Not Found"})
    }

    
    res.json(ejerciceFound)
    
})

router.post('/ejercice', async (req, res) => {

    const newejercice = await prisma.ejercice.create({
        data: req.body
    })
    res.json(newejercice)
    
})

router.put('/ejercice/:id', async (req, res) => {
        
    const ejerciceId = parseInt(req.params.id);

    if (isNaN(ejerciceId)) {
        return res.status(400).json({"error": "Invalid ID. ID should be a number."});
    }

    const ejerciceUpdate = await prisma.ejercice.update({
        where:{
            id: ejerciceId
        },
        data:req.body
    })

    if(!ejerciceFound){
        return res.status(404).json({"error": "Not Found"})
    }

    res.json(ejerciceUpdate)

})

router.delete('/ejercice/:id', async (req, res) => {
    const ejerciceId = parseInt(req.params.id);

    if (isNaN(ejerciceId)) {
        return res.status(400).json({"error": "Invalid ID. ID should be a number."});
    }
    const ejerciceDeleted = await prisma.ejercice.delete({
        where:{
            id: ejerciceId
        }
    })
    

    if(!ejerciceDeleted){
        return res.status(404).json({"error": "Not Found"})
    }

    res.json(ejerciceDeleted)

})

export default router;