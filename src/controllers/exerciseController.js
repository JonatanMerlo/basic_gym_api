import ExerciseService from "../services/exerciseService.js"
const exerciseService = new ExerciseService();

export const getById = async (req, res) => {
    const {id} = req.params;
    const exerciseId = parseInt(id)

    if (isNaN(id) || exerciseId < 0) {
        return res.status(400).json({"error": "Bad Request"});
    }

    const exerciseFound = await exerciseService.getById(exerciseId)


    if(!exerciseFound){
        return res.status(404).json({"error": "Not Found"})
    }

    res.json(exerciseFound)
}

export const create = async (req, res) => {
    const {body} = req
    const newExercise = exerciseService.create(body)
    res.json(newExercise)
}

export const update = async (req, res) =>{
    const {body, params} = req
    const exerciseId = parseInt(params.id)

    if (isNaN(id) || exerciseId < 0) {
        return res.status(400).json({"error": "Bad Request"});
    }

    const exerciseUpdated = await exerciseService.update(exerciseId, body)

    if(!exerciseUpdated){
        return res.status(404).json({"error": "Not Found"})
    }

    res.json(exerciseUpdated)

}

export const remove = async (req, res) => {
    const {id} = req.params;
    const exerciseId = parseInt(id)

    if (isNaN(id) || exerciseId < 0) {
        return res.status(400).json({"error": "Bad Request"});
    }
    
    const exerciseRemoved = await exerciseService.remove(exerciseId)

    if(!exerciseRemoved){
        return res.status(404).json({"error": "Not Found"})
    }

    res.json(exerciseRemoved)

}