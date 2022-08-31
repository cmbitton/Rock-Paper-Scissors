function getComputerChoice() {
const choices = ['rock', 'paper', 'scissors'];
let random_Choice = choices[Math.floor(Math.random() * 3)];
return random_Choice;
}

