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
        _switchTurn();
        Gameboard.updateGameboard();
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
    const pveButton = document.querySelector('#pve');
    const p1name = document.querySelector('#p1name');
    const p1input = document.querySelector('#p1input');
    const p2name = document.querySelector('#p2name');
    const p2input = document.querySelector('#p2input');
    const resetButton = document.querySelector('.reset');
    const gameStart = document.querySelector('.game-start');
    const gameStartPVP = document.querySelector('.game-start-pvp');
    const gameStartPVE = document.querySelector('.game-start-pve');
    const backButton = document.querySelector('.back-start');
    const playButton = document.querySelector('.play');

    // EVENT LISTENERS
    resetButton.addEventListener('click', _resetGameboard);
    backButton.addEventListener('click', _refreshPage);
    playButton.addEventListener('click', _startGame);
    pvpButton.addEventListener('click', _requestPlayerNames);
    pveButton.addEventListener('click', _choosePVE);

    // METHODS AND PROPERTIES
    const player1 = Player('X');

    const player2 = Player('O');

    function _displayPlayerNames() { // Displays player names on menu board
        p1name.textContent = p1input.value;
        p2name.textContent = p2input.value;
    }

    function _requestPlayerNames() { // Requests player names
        gameStart.classList.remove('show');
        gameStartPVP.classList.add('show');
    }

    function _choosePVE() {
        gameStart.classList.remove('show');
        gameStartPVE.classList.add('show');
    }

    function _refreshPage() { // Refreshes page
        window.location.reload();
    }

    function _startGame() { // Starts game
        _displayPlayerNames();
        gameStartPVP.classList.remove('show');
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



const AI = (function () { // AI Module

    // DOM CACHE
    const cells = document.querySelectorAll('.cell');
    const backButton = document.querySelector('.back-pve');
    const playButton = document.querySelector('.play-pve');
    const playerName = document.querySelector('#playerinput');
    const x = document.querySelector('#X');
    const o = document.querySelector('#O');
    const p1name = document.querySelector('#p1name');
    const p2name = document.querySelector('#p2name');
    const gameStartPVE = document.querySelector('.game-start-pve');

    // EVENT LISTENERS
    backButton.addEventListener('click', _refreshPage);
    playButton.addEventListener('click', _startGame);

    // METHODS AND PROPERTIES
    function _displayPlayerNames() {
        if (x.checked) {
            p1name.textContent = playerName;
            p2name.textContent = 'The Computer';
        } else if (o.checked) {
            p1name.textContent = 'The Computer';
            p2name.textContent = playerName;
        }
    }

    function _startGame() {
        _displayPlayerNames();
        gameStartPVE.classList.remove('show');
        cells.forEach(cell => cell.addEventListener('click', _makeMove));
    }

    function _makeMove(e) {
        const index = e.target.dataset.cellIndex;
        if (Gameboard.gameboard[index]) {
            return;
        } else {
            if (x.checked) {
                Gameboard.gameboard.splice(index, 1, 'X');
            } else if (o.checked) {
                Gameboard.gameboard.splice(index, 1, 'O');
            }
        }
        Gameboard.updateGameboard();
        setTimeout(_opponentMove, '1000');
    }

    function _opponentMove() {
        let index = Math.floor(Math.random() * 8);
        while (Gameboard.gameboard[index]) {
            index = Math.floor(Math.random() * 8);
        }
        if (x.checked) {
            Gameboard.gameboard.splice(index, 1, 'O');
        } else if (o.checked) {
            Gameboard.gameboard.splice(index, 1, 'X');
        }
        Gameboard.updateGameboard();
    }

})();



const GameEnd = (function () { // GameEnd Module

    // DOM CACHE
    const cells = document.querySelectorAll('.cell');
    const winnerModal = document.querySelector('.game-end');
    const backButton = document.querySelector('.back');
    const resetButton = document.querySelector('.reset2');
    const menuButton = document.querySelector('.refresh');
    const announcement = document.querySelector('.announcement');
    const p1input = document.querySelector('#p1input');
    const p2input = document.querySelector('#p2input');

    // EVENT LISTENERS
    backButton.addEventListener('click', _closeWinner);
    resetButton.addEventListener('click', _resetGameboard);
    menuButton.addEventListener('click', _refreshPage);

    // METHODS AND PROPERTIES
    function _displayWinner() { // Displays the winner of the game
        winnerModal.classList.add('show');
    }

    function _closeWinner() { // Closes the winner modal
        winnerModal.classList.remove('show');
    }

    function _resetGameboard() { // Resets game
        _closeWinner();
        Gameboard.gameboard = ['', '', '', '', '', '', '', '', ''];
        Gameboard.updateGameboard();
        cells.forEach(cell => cell.removeEventListener('click', GameStart.player2.makeMove));
        cells.forEach(cell => cell.addEventListener('click', GameStart.player1.makeMove));
    }

    function _refreshPage() { // Refreshes Page
        window.location.reload();
    }

    function _player1Wins() { // Displays player 1 winner
        _displayWinner();
        cells.forEach(cell => cell.removeEventListener('click', GameStart.player2.makeMove));
        announcement.textContent = `${p1input.value} is the Winner!`;
    }

    function _player2Wins() { // Displays player 2 winner
        _displayWinner();
        cells.forEach(cell => cell.removeEventListener('click', GameStart.player1.makeMove));
        announcement.textContent = `${p2input.value} is the Winner!`;
    }

    function _tieGame() { // Displays player 3 winner
        _displayWinner();
        announcement.textContent = 'It\'s a draw!';
    }

    function checkWinner() { // Checks for winner after every move
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