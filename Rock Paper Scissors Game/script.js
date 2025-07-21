const buttons = document.querySelectorAll("button");
const resultEl = document.querySelector("#result")
const playerScoreEl = document.querySelector("#user-score")
const computerScoreEl = document.querySelector("#computer-score")

let playerScore = 0;
let computerScore = 0;

const computerPlay = () => {
    const choices = ["paper", "rock", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length)
    return choices[randomChoice]
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const result = playRound(button.id, computerPlay());
        resultEl.textContent = result
    })
})

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return "It's a tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors" || 
        playerSelection === "paper" && computerSelection === "rock" || 
        playerSelection === "scissors" && computerSelection === "paper"
    ) {
        playerScore++
        playerScoreEl.textContent = playerScore;
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else {
        computerScore++
        computerScoreEl.textContent = computerScore;
        return `You Lose! ${computerSelection} beats ${playerSelection}`
}
}