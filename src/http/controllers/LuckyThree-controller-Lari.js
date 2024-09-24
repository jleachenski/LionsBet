import LuckyThreeBet from "../../database/models/LuckyThree-model-Lari.js";

const store = async (req, res) => {
  try {
    const { Numbers, BetAmount } = req.body;
    const drawnNumbers = Array.from({ length: 3 }, () => Math.floor(Math.random() * 30) + 1); //drawnNumbers = numeros sorteados
    const Hits = Numbers.filter(num => drawnNumbers.includes(num)).length; //Hits = Acertos do jogador

    let status = "LOST";
    let prize = 0;

    if (Hits > 0) {
      status = Hits >= 2 ? "WON" : "PARTIAL";
      prize = BetAmount * (Hits / 3);  
    }

    const bet = await LuckyThreeBet.create({
      bet: {
        value: BetAmount,
        status: status
      },
      Numbers,
      DrawnNumbers: drawnNumbers,
      BetAmount,
      Prize: prize
    });

    res.status(201).json({
      message: `Você acertou ${Hits} número(s)!`,
      bet
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const index = async (req, res) => {
    try {
        const content = await LuckyThreeBet.find(req.query).exec()
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
}

const show = async (req, res) => {
    try {
        const content = await LuckyThreeBet.findById(req.params.id).exec()
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
}

const update = async (req, res) => {
    try {
      const content = await LuckyThreeBet.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
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
}