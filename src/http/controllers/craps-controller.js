import Craps from "../../database/models/craps-model.js";

const store = async (req, res) => {
  try {
    for(let c=1; c<=3; c++){
        const rand1 = Math.ceil(Math.random()*6);
        const rand2 = Math.ceil(Math.random()*6);
        if(req.body.roll == c){
            (rand1 == req.body.dice1 
            && rand2 == req.body.dice2)
            ||(rand2 == req.body.dice1 
            && rand1 == req.body.dice2)
            ? req.body.bet.status = "WON"
            : req.body.bet.status = "LOST";
        }
    }
    await Craps.create(req.body);
    res.json();
  } catch (error) {
    res.status(400).json(error);
  }
};

const index = async (req, res) => {
    try {
        const content = await Craps.find(req.query).exec()
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
}

const show = async (req, res) => {
    try {
        const content = await Craps.findById(req.params.id).exec()
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
}

const update = async (req, res) => {
    try {
        await Craps.findByIdAndUpdate(req.params.id).exec()
        res.json();
    } catch (error) {
        res.status(400).json(error);
    }
}

export default {
    store,
    index,
    show,
    update
}