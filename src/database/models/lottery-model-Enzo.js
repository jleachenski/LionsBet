class Lottery {
    constructor() {
      this.winningNumbers = [];
      this.userNumbers = [];
    }
  
    generateWinningNumbers() {
      const numbers = new Set();
      while (numbers.size < 5) {
        numbers.add(Math.floor(Math.random() * 100) + 1);
      }
      this.winningNumbers = [...numbers];
    }
  
    checkNumbers(userNumbers) {
      this.userNumbers = userNumbers;
      const correctGuesses = this.userNumbers.filter(number => this.winningNumbers.includes(number)).length;
      return {
        isWinner: correctGuesses === 5,
        correctGuesses,
        winningNumbers: this.winningNumbers
      };
    }
  }
  
  module.exports = Lottery;