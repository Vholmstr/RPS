const choices = ["rock", "paper", "scissors"];

function computerPlay () {
    let randomNum = Math.floor(Math.random()*3);
    return choices[randomNum];
}