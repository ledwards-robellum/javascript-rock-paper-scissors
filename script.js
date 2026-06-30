// Declare global variables
let playerChoice;
let computerChoice;

const choices = ['rock', 'paper', 'scissors'];

let count = 0;
let playerScore = 0;
let computerScore = 0;
let roundMax = 5;

let result = "";

// Target choice buttons, enable/disable
function getButtons(bool) {
  const buttons = document.getElementsByClassName("choice-button");
  for (let el of buttons) {
    el.disabled = bool;
  }
}

// Update text for relevant content
function updateContent() {
  document.getElementById('round-count').textContent = "Round: " + count;
  document.getElementById('player-choice').textContent = playerChoice;
  document.getElementById('computer-choice').textContent = computerChoice;
  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
  document.getElementById('round-max').textContent = "Max Rounds: " + roundMax;
  document.getElementById('round-result').textContent = result;
}

function updateResultBanner(color) {
  document.getElementById('round-result').style.backgroundColor = color;
}

// Reset content
function restartGame() {
  count = 0;
  playerScore = 0;
  computerScore = 0;

  result = "New Game!";

  updateResultBanner('white');
  updateContent();
  getButtons("");
}

function playGame(playerChoice) {
  // Generate random number out of 3 for computerChoice
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomIndex];

  // If count is below round max, run round
  if (count < (roundMax - 1)) {
    if (playerChoice === computerChoice) {
      result = "You tie this round!";
      updateResultBanner("#d3d3d3");
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result = "You win this round!";
      updateResultBanner('#98fb98');
      playerScore += 1;
    } else {
      result = "You lose this round!";
      document.getElementById('round-result').style.backgroundColor = '#d87093';
      computerScore += 1;
    }
  // Else compare score and display results
  } else {
    if (playerScore > computerScore) {
      result = "👑 You won the game! 👑";
      updateResultBanner('#008000');
    } else if (playerScore < computerScore) {
      result = "🤕You lost the game! 🤕";
      updateResultBanner('#ff0000');
    } else {
      result = "🎀 You tied the game! 🎀";
      updateResultBanner('#d3d3d3');
    }
    getButtons('true');
  }

  count += 1;
  updateContent();
}

