const Lottery = require('./lottery-models');

let lottery = new Lottery();

function startGame() {
  lottery.generateWinningNumbers();
}

function checkResult(userNumbers) {
  const result = lottery.checkNumbers(userNumbers);
  return result;
}

module.exports = {
  startGame,
  checkResult
};