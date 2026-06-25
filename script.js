let playerChoice;
let computerChoice;

const choices = ['rock', 'paper', 'scissors'];

let count = 0;
let playerScore = 0;
let computerScore = 0;
let roundMax = 5;

let result = "";

function getButtons(bool) {
  const buttons = document.getElementsByClassName("choice-button");
  for (let el of buttons) {
    el.disabled = bool;
  }
}

function restartGame() {
  count = 0;
  playerScore = 0;
  computerScore = 0;

  result = "New Game!"

  document.getElementById('round-count').textContent = "Round: " + count;
  document.getElementById('player-choice').textContent = playerChoice;
  document.getElementById('computer-choice').textContent = computerChoice;
  document.getElementById('player-score').textContent = "Player Score: " + playerScore;
  document.getElementById('computer-score').textContent = "Computer Score: " + computerScore;
  document.getElementById('round-result').textContent = result;
  document.getElementById('round-max').textContent = "Max Rounds: " + roundMax;

  getButtons("");
}

function playGame(playerChoice) {
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomIndex];

  if (count < roundMax) {
    if (playerChoice === computerChoice) {
      result = "You tie this round!"
    } else if (
      (playerChoice === "rock" && computerChoice == "scissors") ||
      (playerChoice === "paper" && computerChoice == "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      result = "You win this round!"
      playerScore += 1;
    } else {
      result = "You lose this round!"
      computerScore += 1;
    }
    count += 1;

    document.getElementById('round-count').textContent = "Round: " + count;
    document.getElementById('player-choice').textContent = playerChoice;
    document.getElementById('computer-choice').textContent = computerChoice;
    document.getElementById('player-score').textContent = "Player Score: " + playerScore;
    document.getElementById('computer-score').textContent = "Computer Score: " + computerScore;
    document.getElementById('round-result').textContent = result;
    document.getElementById('round-max').textContent = "Max Rounds: " + roundMax;
  } else {
    result = "Game Over!"
    document.getElementById('round-result').textContent = result;

    getButtons("true");
  }
}

