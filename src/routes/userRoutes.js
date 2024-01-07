import { Router } from "express";
import prisma  from "../db.js";


const router = Router()


router.get('/user/:id', async (req, res) => {
    
    const userId = parseInt(req.params.id);

    if (isNaN(userId)) {
        return res.status(400).json({"error": "Invalid ID. ID should be a number."});
    }

    const userFound = await prisma.user.findFirst({
        where:{
            id: userId
        },
        include: {
            routines: {
                include:{
                    series: {
                        include:{
                            ejercices: true
                        }
                    }   
                }
            }
        }
    })
    
    if(!userFound){
        return res.status(404).json({"error": "Not Found"})
    }

    console.log(userFound)
    res.json(userFound)

})

router.post('/user', async (req, res) => {

    const newUser = await prisma.user.create({
        data: req.body
    })
    res.json(newUser)
    
})

router.put('/user/:id', async (req, res) => {
        
    const userId = parseInt(req.params.id);

    if (isNaN(userId)) {
        return res.status(400).json({"error": "Invalid ID. ID should be a number."});
    }

    const userUpdate = await prisma.user.update({
        where:{
            id: userId
        },
        data:req.body
    })

    if(!userFound){
        return res.status(404).json({"error": "Not Found"})
    }

    res.json(userUpdate)

})

router.delete('/user/:id', async (req, res) => {
    const userId = parseInt(req.params.id);

    if (isNaN(userId)) {
        return res.status(400).json({"error": "Invalid ID. ID should be a number."});
    }
    const userDeleted = await prisma.user.delete({
        where:{
            id: userId
        }
    })

    if(!userDeleted){
        return res.status(404).json({"error": "Not Found"})
    }

    res.json(userDeleted)

})


export default router;