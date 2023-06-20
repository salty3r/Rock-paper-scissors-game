const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceButtons = document.querySelectorAll(".choiceButton");

let player;
let computer;
let result;

choiceButtons.forEach(button => button.addEventListener("click", () => {
  player = button.textContent.toLowerCase();
  computerTurn();
  playerText.textContent = `Player: ${player}`;
  computerText.textContent = `Computer: ${computer}`;
  resultText.textContent = checkWinner();
}));

function computerTurn() {
  const randNumb = Math.floor(Math.random() * 3) + 1;
  switch (randNumb) {
    case 1:
      computer = "rock";
      break;
    case 2:
      computer = "paper";
      break;
    case 3:
      computer = "scissors";
      break;
  }
}

function checkWinner() {
  if (player === computer) {
    return "It's a tie!";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "Player wins!";
  } else {
    return "Computer wins!";
  }
}

    

