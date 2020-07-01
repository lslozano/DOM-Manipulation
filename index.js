// Dice rolls.
const playerOneRoll = Math.floor((Math.random() * 6) + 1);
const playerTwoRoll = Math.floor((Math.random() * 6) + 1);

// Variables that represent the Dice images.
let dice1 = document.querySelector(".img1");
let dice2 = document.querySelector(".img2");

// Variable that represents the h1 title.
let decision = document.querySelector("h1");

// Variables that represents the winner flag.
let playerOneWins = document.querySelector(".playerOneWins");
let playerTwoWins = document.querySelector(".playerTwoWins");

// Setting the src of the image dynamically according to roll value.
dice1.src = `images/dice${playerOneRoll}.png`;
dice2.src = `images/dice${playerTwoRoll}.png`;

// Another way of doing it using the setAttribute method:
// dice1.setAttribute("src", `images/dice${playerOneRoll}.png`);
// dice2.setAttribute("src", `images/dice${playerTwoRoll}.png`);

// Deciding winner or if it is a tie and setting the text of the h1 accordingly.
if (playerOneRoll > playerTwoRoll) {
  decision.innerText = "Player 1 Wins!";
  playerOneWins.style.visibility = "visible";
} else if (playerOneRoll < playerTwoRoll) {
  decision.innerText = "Player 2 Wins!";
  playerTwoWins.style.visibility = "visible";
} else if (playerOneRoll == playerTwoRoll) {
  decision.innerText = "Draw!";
}