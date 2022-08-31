function getComputerChoice() {
const choices = ['rock', 'paper', 'scissors'];
let random_Choice = choices[Math.floor(Math.random() * 3)];
return random_Choice;
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === computerChoice) {
        return "Tie!";
    }
    else if (playerChoice === 'rock' && computerChoice === 'paper' || playerChoice === 'paper' && computerChoice === 'scissors' || playerChoice === 'scissors' && computerChoice === 'rock') {
        return `You Lose! ${computerChoice} beats ${playerChoice}`;
    }
    
    else {
        return `You Win! ${playerChoice} beats ${computerChoice}!`
    }
}


