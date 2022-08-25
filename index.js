const Player = function (xo) { // Player Factory Function

    // DOM CACHE
    const cells = document.querySelectorAll('.cell');

    // METHODS AND PROPERTIES
    function _switchTurn() { // Switches player turn after each move
        if (xo === 'X') {
            cells.forEach(cell => cell.removeEventListener('click', GameStart.player1.makeMove));
            cells.forEach(cell => cell.addEventListener('click', GameStart.player2.makeMove));
        } else {
            cells.forEach(cell => cell.removeEventListener('click', GameStart.player2.makeMove));
            cells.forEach(cell => cell.addEventListener('click', GameStart.player1.makeMove));
        }
    }

    function makeMove(e) { // Updates gameboard array
        const index = e.target.dataset.cellIndex;
        if (Gameboard.gameboard[index]) {
            return;
        } else {
            Gameboard.gameboard.splice(index, 1, xo);
        }
        Gameboard.updateGameboard();
        _switchTurn();
    }

    return { makeMove };

};



const Gameboard = (function () { // Gameboard Module

    // METHODS AND PROPERTIES
    const gameboard = ['', '', '', '', '', '', '', '', ''];

    function updateGameboard() { // Displays gameboard array on gameboard
        Gameboard.gameboard.forEach((element, index) => {
            let cell = document.querySelector(`.cell${index}`);
            cell.textContent = element;
        })
        GameEnd.checkWinner();
    }

    return { gameboard, updateGameboard };

})();



const GameStart = (function () {  // GameStart Module

    // DOM CACHE
    const cells = document.querySelectorAll('.cell');
    const pvpButton = document.querySelector('#pvp');
    const p1name = document.querySelector('#p1name');
    const p1input = document.querySelector('#p1input');
    const p2name = document.querySelector('#p2name');
    const p2input = document.querySelector('#p2input');
    const resetButton = document.querySelector('.reset');
    const gameStart = document.querySelector('.game-start');
    const gameStart2 = document.querySelector('.game-start-2');
    const backButton = document.querySelector('.back-start');
    const playButton = document.querySelector('.play');

    // EVENT LISTENERS
    resetButton.addEventListener('click', _resetGameboard);
    backButton.addEventListener('click', _refreshPage);
    playButton.addEventListener('click', _startGame);
    pvpButton.addEventListener('click', _requestPlayerNames);

    // METHODS AND PROPERTIES
    const player1 = Player('X');

    const player2 = Player('O');

    function _displayPlayerNames() { // Displays player names on menu board
        p1name.textContent = p1input.value;
        p2name.textContent = p2input.value;
    }

    function _requestPlayerNames() { // Requests player names
        gameStart.classList.remove('show');
        gameStart2.classList.add('show');
    }

    function _refreshPage() { // Refreshes page
        window.location.reload();
    }

    function _startGame() { // Starts game
        _displayPlayerNames();
        gameStart2.classList.remove('show');
        cells.forEach(cell => cell.addEventListener('click', player1.makeMove));
    }

    function _resetGameboard() { // Resets game
        Gameboard.gameboard = ['', '', '', '', '', '', '', '', ''];
        Gameboard.updateGameboard();
        cells.forEach(cell => cell.removeEventListener('click', player2.makeMove));
        cells.forEach(cell => cell.addEventListener('click', player1.makeMove));
    }

    return { player1, player2 };

})();



const GameEnd = (function () { // GameEnd Module

    const cells = document.querySelectorAll('.cell');

    const _goBack = () => {
        const winnerModal = document.querySelector('.game-end');
        winnerModal.classList.remove('show');
    }

    const _resetGameboard = () => {
        _goBack();
        Gameboard.gameboard = ['', '', '', '', '', '', '', '', ''];
        Gameboard.updateGameboard();
        cells.forEach(cell => cell.removeEventListener('click', GameStart.player2.makeMove));
        cells.forEach(cell => cell.addEventListener('click', GameStart.player1.makeMove));
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