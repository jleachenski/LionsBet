const express = require('express');
const controller = require('./lottery-controller');

const router = express.Router();

router.get('/start', controller.startGame);

router.post('/check', (req, res) => {
  const userNumbers = req.body.numbers;
  const result = controller.checkResult(userNumbers);
  res.json(result);
});

module.exports = router;