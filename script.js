let strHuman;
let strComputer;

let humanChoice = 0;
let computerChoice = 0;

let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
  strHuman = prompt("Please make a choice: Rock, Paper, or Scissors.")
  switch (strHuman) {
    case "Rock":
      humanChoice = 0;
      break;
    case "Paper":
      humanChoice = 1;
      break;
    case "Scissors":
      humanChoice = 2;
      break;
  }
}

function getComputerChoice(max) {
  return Math.floor(Math.random() * max);
}

switch (getComputerChoice(3)) {
  case 0:
    computerChoice = 0;
    strComputer = "Rock";
    break;
  case 1:
    computerChoice = 1;
    strComputer = "Paper";
    break;
  case 2:
    computerChoice = 2;
    strComputer = "Scissors";
    break;
}

function playRound(humanChoice, computerChoice) {
    console.log("Player: " + humanChoice + ", " + strHuman);
    console.log("Computer: " + computerChoice + ", " + strComputer);
}

getHumanChoice();
playRound(humanChoice, computerChoice);