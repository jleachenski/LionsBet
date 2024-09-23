import ChoHanBet from "../../database/models/cho-han-model-alexandre.js";

const store = async (req, res) => {
  try {
    req.body.drawnOdd =
      Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1);

    if (req.body.drawnOdd % 2 == 0) {
      req.body.drawnOdd = "ODD";
    } else req.body.drawnOdd = "EVEN";


    req.body.drawnOdd == req.body.betChohan
      ? (req.body.bet.status = "WON")
      : (req.body.bet.status = "LOST");

    await ChoHanBet.create(req.body);
    res.json();
  } catch (error) {
    res.status(400).json(error);
  }
};

const index = async (req, res) => {
  try {
    const content = await ChoHanBet.find(req.query).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};

const show = async (req, res) => {
  try {
    const content = await ChoHanBet.findById(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};

const update = async (req, res) => {
  try {
    await ChoHanBet.findByIdAndUpdate(req.params.id).exec();
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
