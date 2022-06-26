/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let randomSuit = generateRandomSuit();

  document.querySelector(".top-suit").textContent = randomSuit;
  document.querySelector(".bottom-suit").textContent = randomSuit;
  document.querySelector(".number").innerHTML = generateRandomNumber();
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let index = Math.floor(Math.random() * numbers.length);
  return numbers[index];
};
let generateRandomSuit = () => {
  let suits = ["♦", "♥", "♠", "♣"];
  let i = Math.floor(Math.random() * suits.length);
  return suits[i];
};
// function mybutton() {
//   location.reload();
// }
