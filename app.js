const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_CHOSE = ROCK;
const DRAW = "DRAW";
const PLAYER_WINS = "PLAYER WINS";
const COMPUTER_WINS = "COMPUTER WINS";
let gameIsRunning = false;
const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    "Your answer"
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice, we chose ${DEFAULT_CHOSE} for you!`);
    return DEFAULT_CHOSE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.64) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const showPlayersChose = function (playerChoice) {
  if (playerChoice === ROCK) {
    document.getElementById("player").classList.add("rock");
  } else if (playerChoice === PAPER) {
    document.getElementById("player").classList.add("paper");
  } else if (playerChoice === SCISSORS) {
    document.getElementById("player").classList.add("scissors");
  }
};

const showComputerChose = function (computerChoice) {
  if (computerChoice === ROCK) {
    document.getElementById("computer").classList.add("rock");
  } else if (computerChoice === PAPER) {
    document.getElementById("computer").classList.add("paper");
  } else if (computerChoice === SCISSORS) {
    document.getElementById("computer").classList.add("scissors");
  }
};

const getWinner = (computerChoice, playerChoice) =>
  computerChoice === playerChoice
    ? DRAW
    : (computerChoice === ROCK && playerChoice === PAPER) ||
      (computerChoice === PAPER && playerChoice === SCISSORS) ||
      (computerChoice === SCISSORS && playerChoice === ROCK)
    ? PLAYER_WINS
    : COMPUTER_WINS;

/*  
  if (computerChoice === playerChoice) {
    return DRAW;
  } else if (
    (computerChoice === ROCK && playerChoice === PAPER) ||
    (computerChoice === PAPER && playerChoice === SCISSORS) ||
    (computerChoice === SCISSORS && playerChoice === ROCK)
  ) {
    return PLAYER_WINS;
  } else {
    return COMPUTER_WINS;
  }*/

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  showPlayersChose(playerChoice);
  showComputerChose(computerChoice);
  let message;
  if (winner === DRAW) {
    message = `You have a draw! You picked ${playerChoice}, and computer also picked ${computerChoice}!`;
  } else if (winner === PLAYER_WINS) {
    message = `you win this game! You picked ${playerChoice}, but computer picked ${computerChoice}!`;
  } else {
    message = `Computer win this game! You picked ${playerChoice}, but computer picked ${computerChoice}!`;
  }
  document.getElementById("winner").innerHTML = message;
  gameIsRunning = false;
});
