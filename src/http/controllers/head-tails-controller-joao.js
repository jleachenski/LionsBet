import headTailsBet from "../../database/models/head-tails-model-joao.js"

const store = async (req, res) => {
    try {
        if(req.body.betChoose == 1){
            req.body.betChoose = "COROA"
        }else if(req.body.betChoose == 2){
            req.body.betChoose = "CARA"
        }else{
            res.status(400).json("Opção inválida")
        }

        const jogarMoeda = () => Math.floor(Math.random() * 2) + 1
        req.body.coinValue = jogarMoeda();
        if(req.body.coinValue == 1){
            req.body.coinValue = "COROA"
        }else if(req.body.coinValue == 2){
            req.body.coinValue = "CARA"
        }
        req.body.betChoose == req.body.coinValue
        ? (req.body.bet.status = "WON")
        : (req.body.bet.status = "LOST")

        await headTailsBet.create(req.body);
        res.json()
    } catch (error) {
        console.log(error)
        res.status(400).json();
    }
} 

const index = async (req, res) => {
    try {
        const content = await headTailsBet.find(req.query).exec();
        res.json(content)
    } catch (error) {
        console.log(error)
        res.status(400).json();
    }
}

const show = async (req, res) => {
    try {
        const content = await headTailsBet.findById(req.params.id).exec()
        res.json(content)
    } catch (error) {
        console.log(error);
        res.status(400).json();
    }
}

const update = async (req, res) => {
    try {
        await headTailsBet.findByIdAndUpdate(req.params.id).exec()
        res.json()
    } catch (err) {
        res.status(400).json();
    }
}

export default {
    store,
    index,
    show,
    update
}