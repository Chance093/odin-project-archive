const computerSelection = () => { // GET COMPUTER INPUT
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
    }
}

const playerSelection = () => { // GET USER INPUT
    let playerSelection = prompt('Rock... Paper... Scissors... SHOOT!').toLowerCase();
    while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        playerSelection = prompt('Try Again! Rock... Paper... Scissors... SHOOT!').toLowerCase();
    }
    return playerSelection;
}

// function playGame(user, computer) { // PLAY A SINGLE ROUND, USER VS COMPUTER (IF ELSE VERSION)
//     if (user === 'rock') {
//         if (computer === 'scissors') {
//             return 'YOU WIN! ROCK BEATS SCISSORS!';
//         } else if (computer === 'paper') {
//             return 'YOU LOSE! PAPER BEATS ROCK!';
//         } else {
//             return 'YOU TIED!';
//         }
//     } else if (user === 'paper') {
//         if (computer === 'rock') {
//             return 'YOU WIN! PAPER BEATS ROCK!';
//         } else if (computer === 'scissors') {
//             return 'YOU LOSE! SCISSORS BEATS PAPER!';
//         } else {
//             return 'YOU TIED!';
//         }
//     } else if (user === 'scissors') {
//         if (computer === 'paper') {
//             return 'YOU WIN! SCISSORS BEATS PAPER!';
//         } else if (computer === 'rock') {
//             return 'YOU LOSE! ROCK BEATS SCISSORS!';
//         } else {
//             return 'YOU TIED!';
//         }
//     }
// }

function playGame(user, computer) { // PLAY A SINGLE ROUND, USER VS COMPUTER (SWITCH VERSION)
    switch (user) {
        case 'rock':
            switch (computer) {
                case 'rock':
                    return 'YOU TIED!';
                    break;
                case 'paper':
                    return 'YOU LOSE! PAPER BEATS ROCK!';
                    break;
                case 'scissors':
                    return 'YOU WIN! ROCK BEATS SCISSORS!';
                    break;
            }
            break;
        case 'paper':
            switch (computer) {
                case 'rock':
                    return 'YOU WIN! PAPER BEATS ROCK!';
                    break;
                case 'paper':
                    return 'YOU TIED!';
                    break;
                case 'scissors':
                    return 'YOU LOSE! SCISSORS BEATS PAPER!';
                    break;
            }
            break;
        case 'scissors':
            switch (computer) {
                case 'rock':
                    return 'YOU LOSE! ROCK BEATS SCISSORS!';
                    break;
                case 'paper':
                    return 'YOU WIN! SCISSORS BEATS PAPER!';
                    break;
                case 'scissors':
                    return 'YOU TIED!';
                    break;
            }
            break;
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
game();

