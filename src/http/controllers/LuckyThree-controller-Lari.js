import LuckyThree from "../../database/models/LuckyThree-model-Lari.js";

const store = async (req, res) => {
  let numbers = []
  while (numbers.length < 3) {
    let number = Math.floor(Math.random() * 30) + 1
    if(!numbers.includes(number)) {
        numbers.push(number)
    }
  }

  try {
    await LuckyThree.create(req.body);
    res.json();
  } catch (error) {
    res.status(400).json(error);
  }
};

const index = async (req, res) => {
    try {
        const content = await LuckyThree.find(req.query).exec()
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
}

const show = async (req, res) => {
    try {
        const content = await LuckyThree.findById(req.params.id).exec()
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
}

const update = async (req, res) => {
    try {
        await LuckyThree.findByIdAndUpdate(req.params.id).exec()
        res.json();
    } catch (error) {
        res.status(400).json(error);
    }
}

const destroy = async (req, res) => {
    try {
        await LuckyThree.findByIdAndDelete(req.params.id).exec()
        res.json();
    } catch (error) {
        res.status(400).json(error);
    }
}

export default {
    store,
    index,
    show,
    update,
    destroy
}