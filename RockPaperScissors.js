function getComputerChoice() {
  const computerChoices = ['rock', 'paper', 'scissors'];
  const choiceIndex = Math.floor(Math.random() * 3);
  const choice = computerChoices[choiceIndex];

  return choice;
}

function getPlayerChoice() {
  while (true) {
    const choice = prompt('Rock, Paper, or Scissors?').toLowerCase();
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
      return choice;
    } else {
      alert('Choose Rock, Paper, or Scissors!');
    }
  }
}

function playRound(computerChoice, playerChoice) {
  computerChoice = getComputerChoice();
  playerChoice = getPlayerChoice();
  if (computerChoice === playerChoice) {
    alert('Tie round!');
  } else if (
    (computerChoice === 'rock' && playerChoice === 'scissors') ||
    (computerChoice === 'scissors' && playerChoice === 'paper') ||
    (computerChoice === 'paper' && playerChoice === 'rock')
  ) {
    alert(`You lose that round: ${computerChoice} beats ${playerChoice}!`);
    computerScore++;
    alert(
      `The computer has ${computerScore} points. You have ${playerScore} points.`
    );
  } else {
    alert(`You win that round: ${playerChoice} beats ${computerChoice}!`);
    playerScore++;
    alert(
      `You have ${playerScore} points. The computer has ${computerScore} points.`
    );
  }
}

let computerScore = 0;
let playerScore = 0;
let computerChoice = '';
let playerChoice = '';

function playGame() {
  while (computerScore < 5 && playerScore < 5) {
    playRound(computerChoice, playerChoice);
  }

  if (computerScore === 5) {
    alert('You lose the entire game, loser!');
  }

  if (playerScore === 5) {
    alert('You win the whole game, winner!');
  }
}

playGame();
