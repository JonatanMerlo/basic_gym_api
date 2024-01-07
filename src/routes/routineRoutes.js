import { Router } from "express";
import prisma  from "../db.js";


const router = Router()


router.get('/routine/:id', async (req, res) => {
    
    const routine = parseInt(req.params.id);

    if (isNaN(routine)) {
        return res.status(400).json({"error": "Invalid ID. ID should be a number."});
    }

    const routineFound = await prisma.routine.findFirst({
        where:{
            id: routine
        },
        include:{
            series: {
                include:{
                    ejercices: true
                }
            }    
        }
    })
    
    if(!routineFound){
        return res.status(404).json({"error": "Not Found"})
    }

    console.log(routineFound)
    res.json(routineFound)
    
})

router.post('/routine', async (req, res) => {

    const newroutine = await prisma.routine.create({
        data: req.body
    })
    res.json(newroutine)
    
})

router.put('/routine/:id', async (req, res) => {
        
    const routineId = parseInt(req.params.id);

    if (isNaN(routineId)) {
        return res.status(400).json({"error": "Invalid ID. ID should be a number."});
    }

    const routineUpdate = await prisma.routine.update({
        where:{
            id: routineId
        },
        data:req.body
    })

    if(!routineFound){
        return res.status(404).json({"error": "Not Found"})
    }

    res.json(routineUpdate)

})

router.delete('/routine/:id', async (req, res) => {
    const routineId = parseInt(req.params.id);

    if (isNaN(routineId)) {
        return res.status(400).json({"error": "Invalid ID. ID should be a number."});
    }
    const routineDeleted = await prisma.routine.delete({
        where:{
            id: routineId
        }
    })

    if(!routineDeleted){
        return res.status(404).json({"error": "Not Found"})
    }

    res.json(routineDeleted)

})

export default router;