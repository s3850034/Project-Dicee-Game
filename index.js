//Generating 2 random numbers for the dice images
var min = Math.ceil(1);
var max = Math.floor(6);
var randomNumber1 = Math.floor(Math.random() * (max - min + 1) + min);
var randomNumber2 = Math.floor(Math.random() * (max - min + 1) + min);

//Changing dice images everytime a page refreshes
document.querySelector(".img1").setAttribute("src","images/dice" + randomNumber1 + ".png")
document.querySelector(".img2").setAttribute("src","images/dice" + randomNumber2 + ".png")


//Deciding who won the dice throw
if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw";
}
else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🧨Player 1 Wins!";
} 
else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🧨";
}
