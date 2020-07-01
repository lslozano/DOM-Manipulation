// Dice rolls.
const playerOneRoll = Math.floor((Math.random() * 6) + 1);
const playerTwoRoll = Math.floor((Math.random() * 6) + 1);

// Constants that represent the Dice images.
let dice1 = document.querySelector(".img1");
let dice2 = document.querySelector(".img2");

// Setting the src of the image dynamically according to roll value.
dice1.src = `images/dice${playerOneRoll}.png`;
dice2.src = `images/dice${playerTwoRoll}.png`;

