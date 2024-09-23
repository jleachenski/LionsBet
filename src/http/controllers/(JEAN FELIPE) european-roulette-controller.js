import EuropeanRoulette from "../../database/models/(JEAN FELIPE) european-roulette-model.js"

const store = async (req, res) => {
    try {
        //INÍCIO DA GERAÇÃO DE CORES
        const collor = Math.ceil(Math.random() * 3)
        /*
        GERENCIAMENTO DE CORES;
            1: COR PRETA;
            2: COR VERMELHA;
            3: COR BRANCA
        */
       //FIM DA GERAÇÃO DE CORES

       //INÍCIO DA GERAÇÃO DE NÚMERO DA ROLETA
       const roulette = Math.ceil(Math.random() * 36)
       //FIM DA GERAÇÃO DE NÚMERO DA ROLETA

       attempt.Collor == collor && attempt.Roulette == roulette
       ? (req.body.roulette.status = "WON")
       : (req.body.roulette.status = "LOST")

       await EuropeanRoulette.create(req.body)
       res.json()
    } catch (err) {
        res.status(400).json(err)
    }
}

const index = async (req, res) => {
    try {
        let content = await EuropeanRoulette.find(req.query).exec()
        res.json(content)
    } catch (err) {
        res.status(400).json(err)
    }
}

const show = async (req, res) => {
    try {
        let content = await EuropeanRoulette.findById(req.params.query).exec()
        res.json(content)
    } catch (err) {
        res.status(400).json(err)
    }
}

const update = async (req, res) => {
    try {
        let content = await EuropeanRoulette.findByIdAndUpdate(req.params.query).exec()
        res.json(content)
    } catch (err) {
        res.status(400).json(err)
    }
}

export default {
    store,
    index,
    show,
    update
}