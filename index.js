const cells = document.querySelectorAll('.cell');

const Gameboard = (function () { // Gameboard Module

    const gameboard = ['', '', '', '', '', '', '', '', ''];

    const displayGameboard = () => { // Displays X and O on board
        gameboard.forEach((element, index) => {
            let cell = document.querySelector(`.cell${index}`)
            cell.textContent = element;
        })
    };

    const updateGameboard = () => { // Updates gameboard array after every move
        gameboard.forEach((element, index) => {
            let cell = document.querySelector(`.cell${index}`)
            if (element !== cell.textContent) {
                gameboard.splice(index, 1, cell.textContent);
            }
        })
    }

    const checkWinner = () => { // Checks if anyone has won after every move
        if ((gameboard[0] === 'X' && gameboard[1] === 'X' && gameboard[2] === 'X') ||
            (gameboard[3] === 'X' && gameboard[4] === 'X' && gameboard[5] === 'X') ||
            (gameboard[6] === 'X' && gameboard[7] === 'X' && gameboard[8] === 'X') ||
            (gameboard[0] === 'X' && gameboard[3] === 'X' && gameboard[6] === 'X') ||
            (gameboard[1] === 'X' && gameboard[4] === 'X' && gameboard[7] === 'X') ||
            (gameboard[2] === 'X' && gameboard[5] === 'X' && gameboard[8] === 'X') ||
            (gameboard[0] === 'X' && gameboard[4] === 'X' && gameboard[8] === 'X') ||
            (gameboard[2] === 'X' && gameboard[4] === 'X' && gameboard[6] === 'X')) {
            console.log('Player 1 wins');
        } else if ((gameboard[0] === 'O' && gameboard[1] === 'O' && gameboard[2] === 'O') ||
            (gameboard[3] === 'O' && gameboard[4] === 'O' && gameboard[5] === 'O') ||
            (gameboard[6] === 'O' && gameboard[7] === 'O' && gameboard[8] === 'O') ||
            (gameboard[0] === 'O' && gameboard[3] === 'O' && gameboard[6] === 'O') ||
            (gameboard[1] === 'O' && gameboard[4] === 'O' && gameboard[7] === 'O') ||
            (gameboard[2] === 'O' && gameboard[5] === 'O' && gameboard[8] === 'O') ||
            (gameboard[0] === 'O' && gameboard[4] === 'O' && gameboard[8] === 'O') ||
            (gameboard[2] === 'O' && gameboard[4] === 'O' && gameboard[6] === 'O')) {
            console.log('Player 2 wins');
        } else if (gameboard[0] && gameboard[1] && gameboard[2] &&
            gameboard[3] && gameboard[4] && gameboard[5] &&
            gameboard[6] && gameboard[7] && gameboard[8]) {
            console.log('Tie Game');
        }
    }

    return { displayGameboard, updateGameboard, checkWinner };

})();

Gameboard.displayGameboard();

const Player = function () {
    let x_or_o = 'X';

    const makeMove = (e) => {
        e.target.innerText = x_or_o;
        Gameboard.updateGameboard();
        Gameboard.checkWinner();
        switchPlayer();
    }

    const switchPlayer = () => {
        if (x_or_o === 'X') {
            x_or_o = 'O';
        } else {
            x_or_o = 'X';
        }
    }

    return { makeMove };
}

const chance = Player('X');

cells.forEach(cell => cell.addEventListener('click', chance.makeMove));

