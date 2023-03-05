console.log("hello world");

function getComputerChoice() {
  let gameChoice = ["rock", "paper", "scissors"];
  let gameChoiceResult =
    gameChoice[Math.floor(Math.random() * gameChoice.length)];
  return gameChoiceResult;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "paper") {
    return "You Lose! Paper beats Rock";
  }

  if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You Lose! Scissors beats Paper";
  }

  if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You Lose! Rock beats Scissors ";
  }

  if (computerSelection == "rock" && playerSelection == "paper") {
    return "You Win! Paper beats Rock";
  }

  if (computerSelection == "paper" && playerSelection == "scissors") {
    return "You Win! Scissors beats Paper";
  }

  if (computerSelection == "scissors" && playerSelection == "rock") {
    return "You Win! Rock beats Scissors ";
  }

  return "It's a Draw";
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(computerSelection);

console.log(playRound(playerSelection, computerSelection));
