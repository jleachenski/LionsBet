import ApostaSomaBet from '../../database/models/aposta-soma-bet-model-Fabio.js';

const store = async (req, res) => {
    try {
        const number1 = Math.ceil(Math.random() * 9);
        const number2 = Math.ceil(Math.random() * 9);
        const number3 = Math.ceil(Math.random() * 9);
        const drawnNumber = number1 + number2 + number3;

        req.body.betNumber == drawnNumber
            ? (req.body.bet.status = 'WON')
            : (req.body.bet.status = 'LOST');

        req.body.drawnNumber = drawnNumber;

        const content = await ApostaSomaBet.create(req.body);
        res.status(201).json(content);
    } catch (error) {
        res.status(400).json(error);
    }
};

const index = async (req, res) => {
    try {
        const content = await ApostaSomaBet.find(req.query).exec();
        res.json(content);
    } catch (error) {
        res.status(400).json(error)
    }
};

const show = async (req, res) => {
    try {
        const content = await ApostaSomaBet.findById(req.params.id).exec();
        res.json(content);
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
};

const update = async (req, res) => {
    try {
        const content = await ApostaSomaBet.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json(content);
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
};

export default {
    store,
    index,
    show,
    update
};