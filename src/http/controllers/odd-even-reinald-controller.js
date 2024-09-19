import OddEvenBet from "../../database/models/odd-even-bet-model.js";

const store = async (req, res) => {
  try {
    const number = Math.floor(Math.random() * 100); // Gera um número aleatório entre 0 e 99

    // Verifica se é par ou ímpar
    const isEven = number % 2 === 0;

    // Define o status da aposta com base na escolha do usuário
    req.body.bet.status = req.body.bet.choice === (isEven ? "EVEN" : "ODD") ? "WON" : "LOST";

    // Salva o número sorteado
    req.body.numbers = [number];

    const content = await OddEvenBet.create(req.body);

    res.status(201).json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};

const index = async (req, res) => {
  try {
    const content = await OddEvenBet.find(req.query).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};

const show = async (req, res) => {
  try {
    const content = await OddEvenBet.findById(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};

const update = async (req, res) => {
  try {
    const content = await OddEvenBet.findByIdAndUpdate(req.params.id, req.body).exec();
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
