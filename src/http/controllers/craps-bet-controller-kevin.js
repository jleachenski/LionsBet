import CrapsBet from "../../database/models/craps-bet-model-kevin.js";

const store = async (req, res) => {
  try {
    req.body.betNumber = parseInt(req.body.betNumber);
    const dado1 = Math.ceil(Math.random() * 6);
    const dado2 = Math.ceil(Math.random() * 6);

    req.body.drawnNumber = dado1 + dado2;

    req.body.drawnNumber == req.body.betNumber
      ? (req.body.bet.status = "WON")
      : (req.body.bet.status = "LOST");

    await CrapsBet.create(req.body);
    res.json();
  } catch (error) {
    res.status(400).json(error);
  }
};

const index = async (req, res) => {
  try {
    const content = await CrapsBet.find(req.query).exec();
    res.json(content);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const show = async (req, res) => {
  try {
    const content = await CrapsBet.findById(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};

const update = async (req, res) => {
  try {
    await CrapsBet.findByIdAndUpdate(req.params.id).exec();
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
