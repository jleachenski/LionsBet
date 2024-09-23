import SicBoBet from "../../database/models/sicbo-bet-model.js";

const rollDice = () => {
  return [
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
  ];
};

const store = async (req, res) => {
  try {
    const [a, b, c] = rollDice();
    const sum = a + b + c;

    const isSmall = sum >= 4 && sum <= 10;
    const isBig = sum >= 11 && sum <= 17;

    if (req.body.sizeBet === "SMALL" && isSmall) {
      req.body.bet.status = "WON";
    } else if (req.body.sizeBet === "BIG" && isBig) {
      req.body.bet.status = "WON";
    } else {
      req.body.bet.status = "LOST";
    }

    req.body.diceResult = [a, b, c];

    const content = await SicBoBet.create(req.body);

    res.status(201).json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};

const index = async (req, res) => {
  try {
    const content = await SicBoBet.find(req.query).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};

const show = async (req, res) => {
  try {
    const content = await SicBoBet.findById(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};

const update = async (req, res) => {
  try {
    const content = await SicBoBet.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
    res.json(content);
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
