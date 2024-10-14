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

function playRound(computerChoice, playerChoice) {}

let computerScore = 0;
let playerScore = 0;

let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();
console.log(`the CPU picked ${computerChoice}`);
console.log(`the player picked ${playerChoice}`);
