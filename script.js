let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
  let gameChoice = ["rock", "paper", "scissors"];

  let gameChoiceResult =
    gameChoice[Math.floor(Math.random() * gameChoice.length)];

  return gameChoiceResult;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    return "You Lose! Paper beats Rock";
  }

  if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    return "You Lose! Scissors beats Paper";
  }

  if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    return "You Lose! Rock beats Scissors ";
  }

  if (computerSelection == "rock" && playerSelection == "paper") {
    playerScore++;
    return "You Win! Paper beats Rock";
  }

  if (computerSelection == "paper" && playerSelection == "scissors") {
    playerScore++;
    return "You Win! Scissors beats Paper";
  }

  if (computerSelection == "scissors" && playerSelection == "rock") {
    playerScore++;
    return "You Win! Rock beats Scissors";
  }

  return "It's a Draw";
}

function game() {
  for (let x = 0; x < 5; x++) {
    playRound(playerSelection, getComputerChoice());
  }

  return getRoundResult();
}

function getRoundResult() {
  if (playerScore > computerScore) {
    return "You win this round";
  } else {
    return "You lose this round";
  }
}

const playerSelection = "rock";

console.log(game());
