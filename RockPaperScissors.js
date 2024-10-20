function getComputerChoice() {
  const computerChoices = ['rock', 'paper', 'scissors'];
  const choiceIndex = Math.floor(Math.random() * 3);
  const choice = computerChoices[choiceIndex];

  return choice;
}

function getPlayerChoice(e) {
  const choice = e.target.className;
  return choice;

  // while (true) {
  //   const choice = prompt(
  //     `Rock, Paper, or Scissors? (Round ${roundNumber}/5)`
  //   ).toLowerCase();
  //   if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
  //     return choice;
  //   } else {
  //     alert('Choose Rock, Paper, or Scissors!');
  //   }
  // }
}

function playRound(e) {
  const computerChoice = getComputerChoice();
  const playerChoice = e.target.className;

  const round = document.querySelector('.round');
  const playerScoreDiv = document.querySelector('.playerScore');
  const computerScoreDiv = document.querySelector('.computerScore');
  const results = document.querySelector('.results');

  results.innerHTML = '';

  const tieRound = document.createElement('div');
  tieRound.textContent = 'Tie round!';
  const playerWin = document.createElement('div');
  playerWin.textContent = `You win that round: ${playerChoice} beats ${computerChoice}!`;
  const computerWin = document.createElement('div');
  computerWin.textContent = `You lose that round: ${computerChoice} beats ${playerChoice}!`;

  if (computerChoice === playerChoice) {
    results.appendChild(tieRound);
    console.log('Tie round!');
    roundNumber++;
    round.textContent = `ROUND ${roundNumber}`;
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
  } else {
    results.appendChild(playerWin);
    console.log(`You win that round: ${playerChoice} beats ${computerChoice}!`);
    playerScore++;
    playerScoreDiv.textContent = `Player Score: ${playerScore}`;
    roundNumber++;
    round.textContent = `ROUND ${roundNumber}`;
  }
}

// Initialize score/round variables

let computerScore = 0;
let playerScore = 0;
let roundNumber = 1;

// Initialize button references and event listeners

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);

// Create container div reference for DOM manipulation

const results = document.querySelector('.results');

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  while (playerScore === computerScore) {
    playRound();
  }
}

playGame();
if (computerScore > playerScore) {
  alert('You lose the game!');
} else if (playerScore > computerScore) {
  alert('You win the game!');
} else {
  alert('Tie game!');
}
