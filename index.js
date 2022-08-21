const cells = document.querySelectorAll('.cell');

const Gameboard = (function () { // Gameboard Module

    const gameboard = ['', '', '', '', '', '', '', '', ''];

    const updateGameboard = () => { // Displays gameboard array on gameboard
        gameboard.forEach((element, index) => {
            let cell = document.querySelector(`.cell${index}`)
            cell.textContent = element;
        })
        _checkWinner();
    };

    const _checkWinner = () => { // Checks if anyone has won after every move
        if ((gameboard[0] === 'X' && gameboard[1] === 'X' && gameboard[2] === 'X') ||
            (gameboard[3] === 'X' && gameboard[4] === 'X' && gameboard[5] === 'X') ||
            (gameboard[6] === 'X' && gameboard[7] === 'X' && gameboard[8] === 'X') ||
            (gameboard[0] === 'X' && gameboard[3] === 'X' && gameboard[6] === 'X') ||
            (gameboard[1] === 'X' && gameboard[4] === 'X' && gameboard[7] === 'X') ||
            (gameboard[2] === 'X' && gameboard[5] === 'X' && gameboard[8] === 'X') ||
            (gameboard[0] === 'X' && gameboard[4] === 'X' && gameboard[8] === 'X') ||
            (gameboard[2] === 'X' && gameboard[4] === 'X' && gameboard[6] === 'X')) {
            console.log('You Win!')
        } else if ((gameboard[0] === 'O' && gameboard[1] === 'O' && gameboard[2] === 'O') ||
            (gameboard[3] === 'O' && gameboard[4] === 'O' && gameboard[5] === 'O') ||
            (gameboard[6] === 'O' && gameboard[7] === 'O' && gameboard[8] === 'O') ||
            (gameboard[0] === 'O' && gameboard[3] === 'O' && gameboard[6] === 'O') ||
            (gameboard[1] === 'O' && gameboard[4] === 'O' && gameboard[7] === 'O') ||
            (gameboard[2] === 'O' && gameboard[5] === 'O' && gameboard[8] === 'O') ||
            (gameboard[0] === 'O' && gameboard[4] === 'O' && gameboard[8] === 'O') ||
            (gameboard[2] === 'O' && gameboard[4] === 'O' && gameboard[6] === 'O')) {
            console.log('You Lose!')
        } else if (gameboard[0] && gameboard[1] && gameboard[2] &&
            gameboard[3] && gameboard[4] && gameboard[5] &&
            gameboard[6] && gameboard[7] && gameboard[8]) {
            console.log('You Tied!')
        }
    }

    return { gameboard, updateGameboard };

})();

const Player = function (name, xo) { // Player Factory Function

    let _xo = xo;

    const _switchTurn = () => { // Switches player turn after each move
        if (_xo === 'X') {
            cells.forEach(cell => cell.removeEventListener('click', player1.makeMove));
            cells.forEach(cell => cell.addEventListener('click', player2.makeMove));
        } else {
            cells.forEach(cell => cell.removeEventListener('click', player2.makeMove));
            cells.forEach(cell => cell.addEventListener('click', player1.makeMove));
        }
    }

    const makeMove = (e) => { // Updates gameboard array
        const index = e.target.dataset.cellIndex;
        if (Gameboard.gameboard[index]) {
            return;
        } else {
            Gameboard.gameboard.splice(index, 1, _xo);
        }
        Gameboard.updateGameboard();
        _switchTurn();
    }

    return { makeMove };
}

const player1 = Player('Chance', 'X');
const player2 = Player('Ryan', 'O');

cells.forEach(cell => cell.addEventListener('click', player1.makeMove));