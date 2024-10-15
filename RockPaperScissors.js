function getComputerChoice() {
  const computerChoices = ['rock', 'paper', 'scissors'];
  const choiceIndex = Math.floor(Math.random() * 3);
  const choice = computerChoices[choiceIndex];

  return choice;
}

function getPlayerChoice() {
  while (true) {
    const choice = prompt(
      `Rock, Paper, or Scissors? (Round ${roundNumber}/5)`
    ).toLowerCase();
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
    roundNumber++;
  } else if (
    (computerChoice === 'rock' && playerChoice === 'scissors') ||
    (computerChoice === 'scissors' && playerChoice === 'paper') ||
    (computerChoice === 'paper' && playerChoice === 'rock')
  ) {
    alert(`You lose that round: ${computerChoice} beats ${playerChoice}!`);
    computerScore++;
    roundNumber++;
    alert(
      `The computer has ${computerScore} points. You have ${playerScore} points.`
    );
  } else {
    alert(`You win that round: ${playerChoice} beats ${computerChoice}!`);
    playerScore++;
    roundNumber++;
    alert(
      `You have ${playerScore} points. The computer has ${computerScore} points.`
    );
  }
}

let computerScore = 0;
let playerScore = 0;
let roundNumber = 1;

function playGame() {
  for (let i = 0; i < 5; i++) {
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
