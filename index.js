const cells = document.querySelectorAll('.cell');
const pvpButton = document.querySelector('#pvp');

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

    const fillMenu = () => {
        const p1name = document.querySelector('#p1name');
        const p1input = document.querySelector('#p1input');
        const p1xo = document.querySelector('#p1xo');
        const p2name = document.querySelector('#p2name');
        const p2input = document.querySelector('#p2input');
        const p2xo = document.querySelector('#p2xo');
        const resetButton = document.querySelector('.reset');
        p1name.textContent = p1input.value;
        p1xo.textContent = player1.getXO();
        p2name.textContent = p2input.value;
        p2xo.textContent = player2.getXO();
        resetButton.addEventListener('click', _resetGameboard);
    }

    const requestPVPinputs = () => {
        const gameStart = document.querySelector('.game-start');
        const gameStart2 = document.querySelector('.game-start-2');
        const backButton = document.querySelector('.back-start');
        const playButton = document.querySelector('.play');
        gameStart.classList.remove('show');
        gameStart2.classList.add('show');
        backButton.addEventListener('click', _backToStart);
        playButton.addEventListener('click', _playGame);
    }

    const _backToStart = () => {
        window.location.reload();
    }

    const _playGame = () => {
        fillMenu();
        const gameStart2 = document.querySelector('.game-start-2');
        gameStart2.classList.remove('show');
        cells.forEach(cell => cell.addEventListener('click', player1.makeMove));
    }

    const _resetGameboard = () => {
        Gameboard.gameboard = ['', '', '', '', '', '', '', '', ''];
        Gameboard.updateGameboard();
        cells.forEach(cell => cell.removeEventListener('click', player2.makeMove));
        cells.forEach(cell => cell.addEventListener('click', player1.makeMove));
    }

    return { fillMenu, requestPVPinputs };

})();



const GameEnd = (function () {

    const _goBack = () => {
        const winnerModal = document.querySelector('.game-end');
        winnerModal.classList.remove('show');
    }

    const _resetGameboard = () => {
        _goBack();
        Gameboard.gameboard = ['', '', '', '', '', '', '', '', ''];
        Gameboard.updateGameboard();
        cells.forEach(cell => cell.removeEventListener('click', player2.makeMove));
        cells.forEach(cell => cell.addEventListener('click', player1.makeMove));
    }

    const _refreshPage = () => {
        window.location.reload();
    }

    const _makeButtons = () => {
        const winnerModal = document.querySelector('.game-end');
        const backButton = document.querySelector('.back');
        const resetButton = document.querySelector('.reset2');
        const menuButton = document.querySelector('.refresh');
        winnerModal.classList.add('show');
        backButton.addEventListener('click', _goBack);
        resetButton.addEventListener('click', _resetGameboard);
        menuButton.addEventListener('click', _refreshPage);
    }

    const _player1Wins = () => {
        _makeButtons();
        const announcement = document.querySelector('.announcement');
        const p1input = document.querySelector('#p1input');
        announcement.textContent = `${p1input.value} is the Winner!`;
    }

    const _player2Wins = () => {
        _makeButtons();
        const announcement = document.querySelector('.announcement');
        const p2input = document.querySelector('#p2input');
        announcement.textContent = `${p2input.value} is the Winner!`;
    }

    const _tieGame = () => {
        _makeButtons();
        const announcement = document.querySelector('.announcement');
        announcement.textContent = 'It\'s a draw!';
    }

    const checkWinner = () => { // Checks for winner after every move
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



const Player = function (xo) { // Player Factory Function

    let _xo = xo;

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

    return { makeMove, getXO };

};


pvpButton.addEventListener('click', GameStart.requestPVPinputs)
const player1 = Player('X');
const player2 = Player('O');