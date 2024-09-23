import PrizeBet from "../../database/models/prize-bet-model.js"

const rollDice = () => {
    return[
      Math.floor(Math.random() * 6) + 1,
     Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    ];
};

const store = async (req, res) => {
    try {
        const values = rollDice();
        const sum = values[0] + values[1] + values[2];
        if(req.body.userNumber == sum) {
            req.body.bet.status = "WON";
        } else {
            req.body.bet.status = "LOST";
        }
        const content = await PrizeBet.create({
            userNumber: req.body.userNumber,
            diceResult: sum,
            bet: req.body.bet
        });
        res.status(201).json(content);
    } catch (error) {
        res.status(400).json(error);
    }
};

const index = async (req, res) => {
  try {
    const content = await PrizeBet.find(req.query).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};

const show = async (req, res) => {
  try {
    const content = await PrizeBet.findById(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};

const update = async (req, res) => {
  try {
    const content = await PrizeBet.findByIdAndUpdate(req.params.id, req.body).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};

export default {
    store,
    index,
    show,
    update
}