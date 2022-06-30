const computerSelection = () => { // GET COMPUTER INPUT
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

const playerSelection = () => { // GET USER INPUT
    let playerSelection = prompt('Rock... Paper... Scissors... SHOOT!').toLowerCase();
    while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        playerSelection = prompt('Try Again! Rock... Paper... Scissors... SHOOT!').toLowerCase();
    }
    return playerSelection;
}

function playGame(user, computer) { // PLAY A SINGLE ROUND, USER VS COMPUTER (SWITCH VERSION)
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

function game() { // PLAY A BEST OF 5 GAME
    let userTotalScore = 0;
    let computerTotalScore = 0;
    while (userTotalScore < 3 && computerTotalScore < 3) {
        let playRound = playGame(playerSelection(), computerSelection());
        if (playRound === 'YOU WIN! ROCK BEATS SCISSORS!' || playRound === 'YOU WIN! PAPER BEATS ROCK!' || playRound === 'YOU WIN! SCISSORS BEATS PAPER!') {
            userTotalScore++;
            alert(`${playRound}\nThe score is ${userTotalScore} to ${computerTotalScore}`);
        } else if (playRound === 'YOU LOSE! PAPER BEATS ROCK!' || playRound === 'YOU LOSE! SCISSORS BEATS PAPER!' || playRound === 'YOU LOSE! ROCK BEATS SCISSORS!') {
            computerTotalScore++;
            alert(`${playRound}\nThe score is ${userTotalScore} to ${computerTotalScore}`);
        } else {
            alert(`${playRound}\nThe score is ${userTotalScore} to ${computerTotalScore}`);
        }
    }
    if (userTotalScore === 3) {
        alert(`Congrats! You have beat the computer. \nNOW GO OUTSIDE YOU RAT!`)
    } else {
        alert(`You have lost to the computer! \nI think this was the plot to terminator or something...`)
    }
}
// game();

