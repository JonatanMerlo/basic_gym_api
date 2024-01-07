import prisma from "../db.js"

export default class ExerciseService{
    constructor(){}

    async getById(id){

        const exerciseFound = await prisma.exercise.findFirst({
            where:{
                id: id
            }
        })

        return exerciseFound;
    }

    async create(body){

        const newExercise = await prisma.exercise.create({
            data: body
        })
        return newExercise

    }
    
    async update(id, body){
        const exerciseUpdated = await prisma.exercise.update({
            where:{
                id: id
            },
            data: body
        })

        return exerciseUpdated;
    }

    async remove(id){

        const exerciseRemoved = await prisma.exercise.delete({
            where:{
                id: id
            }
        })

        return exerciseRemoved;
    }
}