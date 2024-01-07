import UserService from "../services/userService.js"
const userService = new UserService();

export const getById = async (req, res) => {
    const {id} = req.params;
    const userId = parseInt(id)

    if (isNaN(id) || userId < 0) {
        return res.status(400).json({"error": "Bad Request"});
    }

    const userFound = await userService.getById(userId)


    if(!userFound){
        return res.status(404).json({"error": "Not Found"})
    }

    res.json(userFound)
}

export const create = async (req, res) => {
    const {body} = req
    const newUser = userService.create(body)
    res.json(newUser)
}

export const update = async (req, res) =>{
    const {body, params} = req
    const userId = parseInt(params.id)

    if (isNaN(id) || userId < 0) {
        return res.status(400).json({"error": "Bad Request"});
    }

    const userUpdated = await userService.update(userId, body)

    if(!userUpdated){
        return res.status(404).json({"error": "Not Found"})
    }

    res.json(userUpdated)

}

export const remove = async (req, res) => {
    const {id} = req.params;
    const userId = parseInt(id)

    if (isNaN(id) || userId < 0) {
        return res.status(400).json({"error": "Bad Request"});
    }
    
    const userRemoved = await userService.remove(userId)

    if(!userRemoved){
        return res.status(404).json({"error": "Not Found"})
    }

    res.json(userRemoved)

}