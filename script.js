const buttons = document.querySelectorAll('button');
const resultText = document.querySelector('#result-text')
const choices = ["rock", "paper", "scissors"];

function computerPlay () {
    let randomNum = Math.floor(Math.random()*3);
    return choices[randomNum];
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "Even, both selected " + playerSelection;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win, " + playerSelection + " beats " + computerSelection + ".";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win, " + playerSelection + " beats " + computerSelection + ".";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win, " + playerSelection + " beats " + computerSelection + ".";
    } else {
        return "Computer wins, " + computerSelection + " beats " + playerSelection  + ".";
    }
}

function game (selection) {
    playRound(selection, computerPlay());
}

buttons.forEach(button => {
    button.addEventListener('click', e => {
        const pChoice = e.target.getAttribute("data-type");
        const result = playRound(pChoice, computerPlay());
        resultText.textContent = result;
    })
})
