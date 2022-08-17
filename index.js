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

    return { gameboard, updateGameboard };

})();

const Player = function (name, xo) { // Player Factory Function

    let _x_or_o = xo;

    let _player1Turn = true;

    const _checkPlayerTurn = () => { // Checks if turn is player 1 or player 2
        if (_player1Turn) {
            _x_or_o = 'O';
            _player1Turn = false;
        } else {
            _x_or_o = 'X';
            _player1Turn = true;
        }
    }

    const makeMove = (e) => { // Updates gameboard array
        const index = e.target.dataset.cellIndex;
        if (Gameboard.gameboard[index]) {
            return;
        } else {
            Gameboard.gameboard.splice(index, 1, _x_or_o);
        }
        Gameboard.updateGameboard();
        _checkPlayerTurn();
    }

    return { makeMove };
}

const chance = Player('Chance', 'X');

cells.forEach(cell => cell.addEventListener('click', chance.makeMove));