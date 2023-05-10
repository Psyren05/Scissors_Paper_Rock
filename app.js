// declaring variables, "caching the DOM"

const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.scoreboard');
const result_div = document.querySelector('.result');
const scissors_div = document.getElementById('s');
const paper_div = document.getElementById('p');
const rock_div = document.getElementById('r');

function getComputerChoice(){
    const choices = ['s', 'p', 'r'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function game(userChoice) {
    const computerChoice = getComputerChoice;

}

function main() {
    scissors_div.addEventListener('click', function(){
        game('s');

    })

    paper_div.addEventListener('click', function(){
        game('p');
        
    })

    rock_div.addEventListener('click', function(){
        game('r');
        
    })
}

main();