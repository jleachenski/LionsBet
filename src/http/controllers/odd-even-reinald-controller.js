import OldEvenReinaldModel from "../../database/models/odd-even-reinald-model.js";

const store = async (req, res) => {
  try {
    req.body.betNumber = parseInt(req.body.betNumber);
    req.body.drawnNumber = Math.ceil(Math.random() * 100);

    req.body.drawnNumber == req.body.betNumber
      ? (req.body.bet.status = "WON")
      : (req.body.bet.status = "LOST");

    await OldEvenReinaldModel.create(req.body);
    res.json();
  } catch (error) {
    res.status(400).json(error);
  }
};

const index = async (req, res) => {
  try {
    const content = await OldEvenReinaldModel.find(req.query).exec();
    res.json(content);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const show = async (req, res) => {
  try {
    const content = await OldEvenReinaldModel.findById(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};

const update = async (req, res) => {
  try {
    await OldEvenReinaldModel.findByIdAndUpdate(req.params.id).exec();
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
