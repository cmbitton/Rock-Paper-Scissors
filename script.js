function getComputerChoice() {
const choices = ['rock', 'paper', 'scissors'];
let random_Choice = choices[Math.floor(Math.random() * 3)];
return random_Choice;
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === computerChoice) {
        return alert("Tie!");
    }
    else if (playerChoice === 'rock' && computerChoice === 'paper' || playerChoice === 'paper' && computerChoice === 'scissors' || playerChoice === 'scissors' && computerChoice === 'rock') {
        return alert(`You Lose! ${computerChoice} beats ${playerChoice}`);
    }
    
    else {
        return alert(`You Win! ${playerChoice} beats ${computerChoice}!`);
    }
}

function game() {
    for(let i = 0; i <5; i++) {
        playRound(prompt('Welcome to rock paper scissors. Input your choice: '), getComputerChoice());
    }

}
game();

