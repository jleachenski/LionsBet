import RoulleteBet from "../../database/models/roullete-bet-model.js";

const store = async (req, res) => {
  try {
    req.body.betNumber = parseInt(req.body.betNumber);
    req.body.drawnNumber = Math.ceil(Math.random() * 100);

    req.body.drawnNumber == req.body.betNumber
      ? (req.body.bet.status = "WON")
      : (req.body.bet.status = "LOST");

    await RoulleteBet.create(req.body);
    res.json();
  } catch (error) {
    res.status(400).json(error);
  }
};

const index = async (req, res) => {
  try {
    const content = await RoulleteBet.find(req.query).exec();
    res.json(content);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const show = async (req, res) => {
  try {
    const content = await RoulleteBet.findById(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};

const update = async (req, res) => {
  try {
    await RoulleteBet.findByIdAndUpdate(req.params.id).exec();
    res.json();
  } catch (error) {
    res.status(400).json(error);
  }
};

export default {
  store,
  index,
  show,
  update,
};
