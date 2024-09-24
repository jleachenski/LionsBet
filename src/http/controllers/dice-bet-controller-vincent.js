import DiceBet from "../../database/models/dice-bet-model-vincent.js";

const store = async (req, res) => {
  try {
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    const playerNumber = parseInt(req.params.number, 10);

    playerNumber === dado1 || playerNumber === dado2
      ? (req.body.Bet.status = "WON")
      : (req.body.Bet.status = "LOST");

    req.body.numbers = [dado1, dado2];

    const content = await DiceBet.create(req.body);

    res.status(201).json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};

const index = async (req, res) => {
    try {
      const content = await DiceBet.find(req.query).exec();
      res.json(content);
    } catch (error) {
      res.status(400).json(error);
    }
  };
  
  const show = async (req, res) => {
    try {
      const content = await DiceBet.findById(req.params.id).exec();
      res.json(content);
    } catch (error) {
      res.status(400).json(error);
    }
  };
  
  const update = async (req, res) => {
    try {
      const content = await DiceBet.findByIdAndUpdate(req.params.id, req.body).exec();
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
