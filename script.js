const buttons = document.querySelectorAll('button');
const resultText = document.querySelector('#result-text')
const choices = ["rock", "paper", "scissors"];

const playerPointsDiv = document.querySelector('#player');
let playerPoints = 0;
const computerPointsDiv = document.querySelector('#computer');
let computerPoints = 0;
let winner = null;

function computerPlay () {
    let randomNum = Math.floor(Math.random()*3);
    return choices[randomNum];
}

function updatePlayerPoints (pointTo) {
    if (pointTo === "player") {
        playerPoints += 1;
        playerPointsDiv.textContent = "Player points: " + playerPoints;
        if (playerPoints === 5) {
            winner = "player";
        }
    }
    if (pointTo === "computer") {
        computerPoints += 1;
        computerPointsDiv.textContent = "Computer points: " + computerPoints;
        if (computerPoints === 5) {
            winner = "computer";
        }
    } 
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "Even, both selected " + playerSelection;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        updatePlayerPoints("player");
        return "You Win, " + playerSelection + " beats " + computerSelection + ".";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        updatePlayerPoints("player");
        return "You Win, " + playerSelection + " beats " + computerSelection + ".";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        updatePlayerPoints("player");
        return "You Win, " + playerSelection + " beats " + computerSelection + ".";
    } else {
        updatePlayerPoints("computer");
        return "Computer wins, " + computerSelection + " beats " + playerSelection  + ".";
    }
}

buttons.forEach(button => {
    button.addEventListener('click', e => {
        const pChoice = e.target.getAttribute("data-type");
        const result = playRound(pChoice, computerPlay());
        resultText.textContent = result;

        if (winner != null) {
            const buttonsContainer = document.querySelector('.buttons-container');
            const container = document.querySelector('.container');
            resultText.textContent = "The " + winner + " wins the game!"
            container.removeChild(buttonsContainer);  
        }
    })
})
