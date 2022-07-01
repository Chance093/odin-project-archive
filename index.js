const buttons = document.querySelectorAll('.btn');
const header = document.querySelector('.win-or-lose');
const par = document.querySelector('.score');
let userTotalScore = 0;
let computerTotalScore = 0;

function computerSelection() { // RANDOMLY GENERATES COMPUTER INPUT
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function displayRoundWinner(user, computer) { // DISPLAYS THE WINNER OF A ROUND
    switch (user) {
        case 'rock':
            switch (computer) {
                case 'rock':
                    return 'YOU TIED!';
                case 'paper':
                    return 'YOU LOSE! PAPER BEATS ROCK!';
                case 'scissors':
                    return 'YOU WIN! ROCK BEATS SCISSORS!';
            }
        case 'paper':
            switch (computer) {
                case 'rock':
                    return 'YOU WIN! PAPER BEATS ROCK!';
                case 'paper':
                    return 'YOU TIED!';
                case 'scissors':
                    return 'YOU LOSE! SCISSORS BEATS PAPER!';
            }
        case 'scissors':
            switch (computer) {
                case 'rock':
                    return 'YOU LOSE! ROCK BEATS SCISSORS!';
                case 'paper':
                    return 'YOU WIN! SCISSORS BEATS PAPER!';
                case 'scissors':
                    return 'YOU TIED!';
            }
    }
}

function addScore() { // ADDS SCORE TO WHOEVER WINS THAT ROUND
    if (header.textContent === 'YOU WIN! ROCK BEATS SCISSORS!' || header.textContent === 'YOU WIN! PAPER BEATS ROCK!' || header.textContent === 'YOU WIN! SCISSORS BEATS PAPER!') {
        userTotalScore++;
        par.textContent = `The score is ${userTotalScore} to ${computerTotalScore}`;
    } else if (header.textContent === 'YOU LOSE! PAPER BEATS ROCK!' || header.textContent === 'YOU LOSE! SCISSORS BEATS PAPER!' || header.textContent === 'YOU LOSE! ROCK BEATS SCISSORS!') {
        computerTotalScore++;
        par.textContent = `The score is ${userTotalScore} to ${computerTotalScore}`;
    } else {
        par.textContent = `The score is ${userTotalScore} to ${computerTotalScore}`;
    }
}

function displayGameWinner() { // WILL DISPLAY WHO WINS WHEN THEY REACH 5
    if (userTotalScore === 5) {
        header.textContent = `YOU BEAT THE COMPUTER!`;
    } else if (computerTotalScore === 5) {
        header.textContent = `THE COMPUTER BEAT YOU!`;
    }
}

function playGame(e) { // PLAYS GAME UP TO 5 POINTS
    if (userTotalScore === 5 || computerTotalScore === 5) return;
    let playerInput = e.target.innerText.toLowerCase();
    let computerInput = computerSelection();
    header.textContent = displayRoundWinner(playerInput, computerInput);
    addScore();
    displayGameWinner();
}

buttons.forEach((btn) => { // FOR ROCK PAPER AND SCISSOR BUTTONS
    btn.addEventListener('click', playGame)
})