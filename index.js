const cells = document.querySelectorAll('.cell');

const Gameboard = (function () { // Gameboard Module

    const gameboard = ['', '', '', '', '', '', '', '', ''];

    const updateGameboard = () => { // Displays gameboard array on gameboard
        Gameboard.gameboard.forEach((element, index) => {
            let cell = document.querySelector(`.cell${index}`);
            cell.textContent = element;
        })
        GameEnd.checkWinner();
    };

    return { gameboard, updateGameboard };

})();



const GameStart = (function () {

    const _p1name = document.querySelector('#p1name');
    const _p1xo = document.querySelector('#p1xo');
    const _p2name = document.querySelector('#p2name');
    const _p2xo = document.querySelector('#p2xo');
    const _resetButton = document.querySelector('.reset');

    const fillMenu = () => {
        _p1name.textContent = player1.getName();
        _p1xo.textContent = player1.getXO();
        _p2name.textContent = player2.getName();
        _p2xo.textContent = player2.getXO();
        _resetButton.addEventListener('click', _resetGameboard);
    }

    const _resetGameboard = () => {
        Gameboard.gameboard = ['', '', '', '', '', '', '', '', ''];
        Gameboard.updateGameboard();
    }

    return { fillMenu };

})();



const GameEnd = (function () {

    const _player1Wins = () => {
        console.log('Player 1 Wins');
    }

    const _player2Wins = () => {
        console.log('Player 2 Wins');
    }

    const _tieGame = () => {
        console.log('Its a draw!');
    }

    const checkWinner = () => { // Checks if anyone has won after every move
        if ((Gameboard.gameboard[0] === 'X' && Gameboard.gameboard[1] === 'X' && Gameboard.gameboard[2] === 'X') ||
            (Gameboard.gameboard[3] === 'X' && Gameboard.gameboard[4] === 'X' && Gameboard.gameboard[5] === 'X') ||
            (Gameboard.gameboard[6] === 'X' && Gameboard.gameboard[7] === 'X' && Gameboard.gameboard[8] === 'X') ||
            (Gameboard.gameboard[0] === 'X' && Gameboard.gameboard[3] === 'X' && Gameboard.gameboard[6] === 'X') ||
            (Gameboard.gameboard[1] === 'X' && Gameboard.gameboard[4] === 'X' && Gameboard.gameboard[7] === 'X') ||
            (Gameboard.gameboard[2] === 'X' && Gameboard.gameboard[5] === 'X' && Gameboard.gameboard[8] === 'X') ||
            (Gameboard.gameboard[0] === 'X' && Gameboard.gameboard[4] === 'X' && Gameboard.gameboard[8] === 'X') ||
            (Gameboard.gameboard[2] === 'X' && Gameboard.gameboard[4] === 'X' && Gameboard.gameboard[6] === 'X')) {
            _player1Wins();
        } else if ((Gameboard.gameboard[0] === 'O' && Gameboard.gameboard[1] === 'O' && Gameboard.gameboard[2] === 'O') ||
            (Gameboard.gameboard[3] === 'O' && Gameboard.gameboard[4] === 'O' && Gameboard.gameboard[5] === 'O') ||
            (Gameboard.gameboard[6] === 'O' && Gameboard.gameboard[7] === 'O' && Gameboard.gameboard[8] === 'O') ||
            (Gameboard.gameboard[0] === 'O' && Gameboard.gameboard[3] === 'O' && Gameboard.gameboard[6] === 'O') ||
            (Gameboard.gameboard[1] === 'O' && Gameboard.gameboard[4] === 'O' && Gameboard.gameboard[7] === 'O') ||
            (Gameboard.gameboard[2] === 'O' && Gameboard.gameboard[5] === 'O' && Gameboard.gameboard[8] === 'O') ||
            (Gameboard.gameboard[0] === 'O' && Gameboard.gameboard[4] === 'O' && Gameboard.gameboard[8] === 'O') ||
            (Gameboard.gameboard[2] === 'O' && Gameboard.gameboard[4] === 'O' && Gameboard.gameboard[6] === 'O')) {
            _player2Wins();
        } else if (Gameboard.gameboard[0] && Gameboard.gameboard[1] && Gameboard.gameboard[2] &&
            Gameboard.gameboard[3] && Gameboard.gameboard[4] && Gameboard.gameboard[5] &&
            Gameboard.gameboard[6] && Gameboard.gameboard[7] && Gameboard.gameboard[8]) {
            _tieGame();
        }
    }

    return { checkWinner };

})();



const Player = function (name, xo) { // Player Factory Function

    let _xo = xo;

    const getName = () => name;

    const getXO = () => xo;

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

    return { makeMove, getName, getXO };

};

const player1 = Player('Chance', 'X');
const player2 = Player('Ryan', 'O');
GameStart.fillMenu();
cells.forEach(cell => cell.addEventListener('click', player1.makeMove));