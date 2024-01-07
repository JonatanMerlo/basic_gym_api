import prisma from "../db.js"

export default class SeriesService{
    constructor() {}

    async getById(id){

        const serieFound = await prisma.serie.findFirst({
            where:{
                id: id
            },
            include:{
                exercises: true
            }
        })

        return serieFound;
    }

    async create(body){

        const newSerie = await prisma.serie.create({
            data: body
        })
        return newSerie

    }

    async update(id, body){
        const serieUpdated = await prisma.serie.update({
            where:{
                id: id
            },
            data: body
        })

        return serieUpdated;
    }

    async remove(id){

        const serieRemoved = await prisma.serie.delete({
            where:{
                id: id
            }
        })

        return serieRemoved;
    }
}