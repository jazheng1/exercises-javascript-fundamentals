/**
 * Given two numbers representing two players' moves in a game of rock,
 * paper, scissors, return whether the first player's move was a win,
 * loss, or draw.
 *
 * To play, two people count off to three. On the count, each hold out their
 * hand in the shape of a rock, a piece of paper, or a pair of scissors. Scissors
 * beats paper, paper beats rock, and rock beats scissors. If both players play
 * the same item, it's a draw.
 *
 * See https://en.wikipedia.org/wiki/Rock_paper_scissors
 *
 * We will represent scissors with the number 0, paper with the number 1,
 * and rock with the number 2.
 *
 * @example
 * rockPaperScissorsWinner(0, 1); // => 'win' (scissors beats paper)
 * rockPaperScissorsWinner(1, 0); // => 'lose' (paper loses to scissors)
 * rockPaperScissorsWinner(1, 2); // => 'win' (paper beats rock)
 * rockPaperScissorsWinner(2, 2); // => 'draw' (both players played rock)
 *
 * @param {number} firstPlayerMove - The first player's move
 * @param {number} secondPlayerMove - The second player's move
 * @returns {string} Returns 'win', 'lose', or 'draw' depending on
 *  whether the first player won, lost, or drew the match.
 */

// let process = require('process');
let readlineSync = require('readline-sync');

function rockPaperScissorsWinner(array) {
  // This is your job. :)
  let gameResult = '';
  if (array[0] == array[1]) {
    gameResult = 'Tied';
  }
  if (array[0] == 1 && array[1] === 0) {
    gameResult = 'Lose';
  }
  if (array[0] == 2 && array[1] === 0) {
    gameResult = 'Win';
  }
  if (array[0] == 0 && array[1] === 1) {
    gameResult = 'Win';
  }
  if (array[0] == 2 && array[1] === 1) {
    gameResult = 'Lose';
  }
  if (array[0] == 1 && array[1] === 2) {
    gameResult = 'Win';
  }
  if (array[0] == 0 && array[1] === 2) {
    gameResult = 'Lose';
  }
  return gameResult;
}

function decipher(num) {
  let choice = '';
  if (num == '0') {
    choice = 'scissors';
  }
  if (num == '1') {
    choice = 'paper';
  }
  if (num == '2') {
    choice = 'rock';
  }
  return choice;
}

if (require.main === module) {
  console.log('Running sanity checks for rockPaperScissorsWinner:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log('Welcome to a game of Rock, Paper, Scissors');
  console.log();
  console.log('Rules: 2 = Rock | 1 = Paper | 0 = Scissors');
  console.log();
  let user1 = readlineSync.question('Choose your move (number): ');
  console.log('You chose ' + decipher(user1));
  let user2 = Math.floor(Math.random() * 3);
  console.log('Computer chose ' + decipher(user2));
  let gameArr = [`${user1}`, user2];
  console.log('You ' + rockPaperScissorsWinner(gameArr) + '!!');
}

module.exports = rockPaperScissorsWinner;
