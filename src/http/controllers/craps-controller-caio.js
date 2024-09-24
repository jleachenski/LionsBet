import crapsBet from "../../database/models/craps-bet-model-caio.js"

const store = async (req, res) => {
  try {
    function rolarDados(){
        return Math.floor(Math.random() * 6) + 1
    }

        let dado1 = rolarDados()
        let dado2 = rolarDados()
        let soma = dado1 + dado2

        if(soma === 7 || soma === 11){
            req.body.bet.status = "WON"
        } else {
            req.body.bet.status = "LOST"
        }

    req.body.dados = [dado1, dado2]

    const content = await crapsBet.create(req.body);

    res.status(201).json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};

const index = async (req, res) => {
  try {
    const content = await crapsBet.find(req.query).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};

const show = async (req, res) => {
  try {
    const content = await crapsBet.findById(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};

const update = async (req, res) => {
  try {
    const content = await crapsBet.findByIdAndUpdate(req.params.id, req.body).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};

export default {
    store,
    index,
    show,
    update
}