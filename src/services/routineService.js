import prisma from "../db.js"

export default class RoutineService{
    constructor() {}

    async getById(id){

        const routineFound = await prisma.routine.findFirst({
            where:{
                id: id
            },
            include:{
                series:{
                    include:{
                        exercises: true
                    }
                }
            }
            
        })

        return routineFound;
    }

    async create(body){

        const newroutine = await prisma.routine.create({
            data: body
        })
        return newroutine

    }

    async update(id, body){
        const routineUpdated = await prisma.routine.update({
            where:{
                id: id
            },
            data: body
        })

        return routineUpdated;
    }

    async remove(id){

        const routineRemoved = await prisma.routine.delete({
            where:{
                id: id
            }
        })

        return routineRemoved;
    }
}