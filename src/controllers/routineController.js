import RoutineService from "../services/routineService.js"
const routineService = new RoutineService();

export const getById = async (req, res) => {
    const {id} = req.params;
    const routineId = parseInt(id)

    if (isNaN(id) || routineId < 0) {
        return res.status(400).json({"error": "Bad Request"});
    }

    const routineFound = await routineService.getById(routineId)


    if(!routineFound){
        return res.status(404).json({"error": "Not Found"})
    }

    res.json(routineFound)
}

export const create = async (req, res) => {
    const {body} = req
    const newRoutine = routineService.create(body)
    res.json(newRoutine)
}

export const update = async (req, res) =>{
    const {body, params} = req
    const routineId = parseInt(params.id)

    if (isNaN(id) || routineId < 0) {
        return res.status(400).json({"error": "Bad Request"});
    }

    const routineUpdated = await routineService.update(routineId, body)

    if(!routineUpdated){
        return res.status(404).json({"error": "Not Found"})
    }

    res.json(routineUpdated)

}

export const remove = async (req, res) => {
    const {id} = req.params;
    const routineId = parseInt(id)

    if (isNaN(id) || routineId < 0) {
        return res.status(400).json({"error": "Bad Request"});
    }
    
    const routineRemoved = await routineService.remove(routineId)

    if(!routineRemoved){
        return res.status(404).json({"error": "Not Found"})
    }

    res.json(routineRemoved)

}