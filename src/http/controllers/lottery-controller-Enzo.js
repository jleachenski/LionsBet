import Lottery from '../../database/models/lottery-model-Enzo';

const generateWinningNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 5) {
        numbers.add(Math.floor(Math.random() * 100) + 1);
    }
    return Array.from(numbers);
};

const index = async (req, res) => {
    try {
        const winningNumbers = generateWinningNumbers();
        const lottery = new Lottery({
            name: req.body.name,
            drawDate: req.body.drawDate,
            winningNumbers,
            prize: req.body.prize,
        });
        await lottery.save();
        res.status(201).json(lottery);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const store = async (req, res) => {
    try {
        const { lotteryId, userNumbers } = req.body;
        const lottery = await Lottery.findById(lotteryId);
        if (!lottery) {
            return res.status(404).json({ message: 'Lottery not found' });
        }

        const userSet = new Set(userNumbers);
        const winningSet = new Set(lottery.winningNumbers);

        const hasWon = [...winningSet].every(num => userSet.has(num));

        if (hasWon) {
            res.status(200).json({ message: 'You win!', winningNumbers: lottery.winningNumbers });
        } else {
            res.status(200).json({ message: 'You lose!', winningNumbers: lottery.winningNumbers });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

 const get = async (req, res) => {
    try {
        const lotteries = await Lottery.find();
        res.status(200).json(lotteries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const show = async (req, res) => {
    try {
        const lottery = await Lottery.findById(req.params.id);
        if (!lottery) {
            return res.status(404).json({ message: 'Lottery not found' });
        }
        res.status(200).json(lottery);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const update = async (req, res) => {
    try {
        const lottery = await Lottery.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!lottery) {
            return res.status(404).json({ message: 'Lottery not found' });
        }
        res.status(200).json(lottery);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteLottery = async (req, res) => {
    try {
        const lottery = await Lottery.findByIdAndDelete(req.params.id);
        if (!lottery) {
            return res.status(404).json({ message: 'Lottery not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default {
  index,
  store,
  get,
  show,
  update,
  deleteLottery
}