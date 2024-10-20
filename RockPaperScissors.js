function getComputerChoice() {
  const computerChoices = ['rock', 'paper', 'scissors'];
  const choiceIndex = Math.floor(Math.random() * 3);
  const choice = computerChoices[choiceIndex];

  return choice;
}

function playRound(e) {
  const computerChoice = getComputerChoice();
  const playerChoice = e.target.className;

  results.innerHTML = '';

  const tieRound = document.createElement('div');
  tieRound.textContent = 'Tie round!';
  const playerWin = document.createElement('div');
  playerWin.textContent = `You win that round: ${playerChoice} beats ${computerChoice}!`;
  const computerWin = document.createElement('div');
  computerWin.textContent = `You lose that round: ${computerChoice} beats ${playerChoice}!`;

  // Tie
  if (computerChoice === playerChoice) {
    results.appendChild(tieRound);
    roundNumber++;
    round.textContent = `ROUND ${roundNumber}`;
    // Computer Win
  } else if (
    (computerChoice === 'rock' && playerChoice === 'scissors') ||
    (computerChoice === 'scissors' && playerChoice === 'paper') ||
    (computerChoice === 'paper' && playerChoice === 'rock')
  ) {
    results.appendChild(computerWin);
    computerScore++;
    roundNumber++;
    computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
    round.textContent = `ROUND ${roundNumber}`;
    // Player Win
  } else {
    results.appendChild(playerWin);
    playerScore++;
    playerScoreDiv.textContent = `Player Score: ${playerScore}`;
    roundNumber++;
    round.textContent = `ROUND ${roundNumber}`;
  }
  if (playerScore === 5 ) {
    rockButton.remove();
    paperButton.remove();
    scissorsButton.remove();
    body.insertBefore(restartButton, round);
    results.textContent = 'You win!!!'
  }
  if (computerScore === 5) {
    rockButton.remove();
    paperButton.remove();
    scissorsButton.remove();
    body.insertBefore(restartButton, round);
    results.textContent = 'You lose!!!'
  }
}

function restartGame () {
  restartButton.remove()
  body.insertBefore(rockButton, round);
  body.insertBefore(paperButton, round);
  body.insertBefore(scissorsButton, round);
  playerScore = 0;
  computerScore = 0;
  roundNumber = 0;
  playerScoreDiv.textContent = 'Player Score: 0';
  computerScoreDiv.textContent = 'Computer Score: 0';
  round.textContent = 'ROUND 1';
  results.textContent = '';
}

// Initialize score/round variables

let computerScore = 0;
let playerScore = 0;
let roundNumber = 1;

// Initialize references and event listeners

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

const restartButton = document.createElement('button');
restartButton.textContent = 'RESTART';

const body = document.querySelector('body');
const results = document.querySelector('.results');
const round = document.querySelector('.round');

const playerScoreDiv = document.querySelector('.playerScore');
const computerScoreDiv = document.querySelector('.computerScore');

rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);
restartButton.addEventListener('click', restartGame);


// Create container div reference for DOM manipulation

const debug = document.querySelector('.debug');



// Detect Game Over
// if (playerScore === 5 ) {
//   rockButton.innerHTML = '';
//   paperButton.innerHTML = '';
//   scissorsButton.innerHTML = '';
//   alert('player win');
// }
// if (computerScore === 5) {
//   rockButton.innerHTML = '';
//   paperButton.innerHTML = '';
//   scissorsButton.innerHTML = '';
//   alert('computer win');
// }