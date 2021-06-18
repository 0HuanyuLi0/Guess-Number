'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let scoreHigh = 0;
const domTextContent = function (part, msg) {
  document.querySelector(part).textContent = msg;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No Number
  if (!guess) {
    domTextContent('.message', '🈚 No Number~');
  }
  // Correct
  else if (guess === secretNumber) {
    domTextContent('.message', '💖 Correct Number!');
    domTextContent('.number', secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    score++;
    domTextContent('.score', score);
    if (score > scoreHigh) {
      scoreHigh = score;
      domTextContent('.highscore', scoreHigh);
    }
  }
  //Different
  else if (guess !== secretNumber) {
    if (score > 1) {
      domTextContent(
        '.message',
        guess > secretNumber ? '⏫ Too High~' : '⏬ Too Low~'
      );
      score--;
      domTextContent('.score', score);
    } else {
      domTextContent('.message', '💥 You lost the game!');
      domTextContent('.score', 0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  domTextContent('.number', '?');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  domTextContent('.message', 'Start guessing agian...');
  document.querySelector('.guess').value = '';
});
