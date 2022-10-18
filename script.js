let wins = 0;
let losses = 0;

function getComputerChoice() {
const choices = ['rock', 'paper', 'scissors'];
let random_Choice = choices[Math.floor(Math.random() * 3)];
return random_Choice;
}

function playRound(playerChoice, computerChoice) {
    const results = document.querySelector('.game-results');
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === computerChoice) {
        results.textContent = "Tie!";
        keepScore('tie');
    }
    else if (playerChoice === 'rock' && computerChoice === 'paper' || playerChoice === 'paper' && computerChoice === 'scissors' || playerChoice === 'scissors' && computerChoice === 'rock') {
        results.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
        keepScore('lose');
    }
    
    else {
        results.textContent = `You Win! ${playerChoice} beats ${computerChoice}!`;
        keepScore('win');
    }
}
function keepScore(result){
    const winsDisplay = document.querySelector('.wins');
    const lossDisplay = document.querySelector('.losses');
    if(result === 'win'){
        wins += 1;
        winsDisplay.textContent = `Wins: ${wins}`
        lossDisplay.textContent = `Losses: ${losses}`
    }
    else if(result === 'lose'){
        losses += 1;
        winsDisplay.textContent = `Wins: ${wins}`
        lossDisplay.textContent = `Losses: ${losses}`
    }
    else{
        //do nothing if tie, just display current score
        winsDisplay.textContent = `Wins: ${wins}`
        lossDisplay.textContent = `Losses: ${losses}`
    }
}
function checkForWin(){
    const results = document.querySelector('.game-results');
    if(wins >= 5){
        results.textContent = `You beat the computer with a score of ${wins} to ${losses}! Choose an object to start playing another game!`
    }
    else if(losses >= 5){
        results.textContent = `The computer beat you with a score of ${losses} to ${wins}! Choose an object to start playing another game!`
    }
}
function resetScore(){
    if(wins >= 5 || losses >= 5){
        wins = 0;
        losses = 0;
    }
}

function game() {
    const buttons = document.querySelectorAll('button');
    for(const button of buttons){
        button.addEventListener('click', (e) => {
            resetScore();
            playRound(e.target.textContent.toLowerCase(), getComputerChoice());
            checkForWin();
        })
    }
}
game();

