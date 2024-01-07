import SeriesService from "../services/seriesService.js"
const seriesService = new SeriesService();

export const getById = async (req, res) => {
    const {id} = req.params;
    const serieId = parseInt(id)

    if (isNaN(id) || serieId < 0) {
        return res.status(400).json({"error": "Bad Request"});
    }

    const serieFound = await seriesService.getById(serieId)


    if(!serieFound){
        return res.status(404).json({"error": "Not Found"})
    }

    res.json(serieFound)
}

export const create = async (req, res) => {
    const {body} = req
    const newSerie = seriesService.create(body)
    res.json(newSerie)
}

export const update = async (req, res) =>{
    const {body, params} = req
    const serieId = parseInt(params.id)

    if (isNaN(id) || serieId < 0) {
        return res.status(400).json({"error": "Bad Request"});
    }

    const serieUpdated = await seriesService.update(serieId, body)

    if(!serieUpdated){
        return res.status(404).json({"error": "Not Found"})
    }

    res.json(serieUpdated)

}

export const remove = async (req, res) => {
    const {id} = req.params;
    const serieId = parseInt(id)

    if (isNaN(id) || serieId < 0) {
        return res.status(400).json({"error": "Bad Request"});
    }
    
    const serieRemoved = await seriesService.remove(serieId)

    if(!serieRemoved){
        return res.status(404).json({"error": "Not Found"})
    }

    res.json(serieRemoved)

}