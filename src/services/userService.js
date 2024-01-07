import prisma from "../db.js"

export default class UserService{
    constructor() {}

    async getById(id){

        const userFound = await prisma.user.findFirst({
            where:{
                id: id
            },
            include: {
                routines: {
                    include:{
                        series: {
                            include:{
                                exercises: true
                            }
                        }   
                    }
                }
            }
            
        })

        return userFound;
    }

    async create(body){

        const newUser = await prisma.user.create({
            data: body
        })
        return newUser

    }

    async update(id, body){
        const userUpdated = await prisma.user.update({
            where:{
                id: id
            },
            data: body
        })

        return userUpdated;
    }

    async remove(id){

        const userRemoved = await prisma.user.delete({
            where:{
                id: id
            }
        })

        return userRemoved;
    }
}