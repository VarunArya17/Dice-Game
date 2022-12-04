// Create two Random Numbers
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

// Change the src of images depending on the random number
var randomImg1 = "images/dice" + randomNumber1 + ".png";
var randomImg2 = "images/dice" + randomNumber2 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImg1);
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImg2);

// Change the heading depending on the winner
var changeHeading = document.getElementById("header")
if (randomNumber1 > randomNumber2) {
  changeHeading.innerHTML = "Player 1 wins"
} else if (randomNumber1 === randomNumber2) {
  changeHeading.innerHTML = "Draw"
} else {
  changeHeading.innerHTML = "Player 2 wins"
}
