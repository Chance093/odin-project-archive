const cells = document.querySelectorAll('.cell');
const pvpButton = document.querySelector('#pvp');

const GameStart = (function () { // GameStart Module

    const createPVPDOM = () => { // Creates player name inputs
        const modalContainer = document.querySelector('.start');
        modalContainer.innerHTML = '';
        const modalDiv = document.createElement('div');
        const head = document.createElement('h1');
        const p1Input = document.createElement('input');
        const p2Input = document.createElement('input');
        const buttonDiv = document.createElement('div');
        const backButton = document.createElement('button');
        const playButton = document.createElement('button');
        modalDiv.classList.add('modal');
        modalDiv.classList.add('inputs');
        p1Input.setAttribute('type', 'text');
        p1Input.setAttribute('placeholder', 'Player 1 Name');
        p1Input.setAttribute('id', 'p1');
        p2Input.setAttribute('type', 'text');
        p2Input.setAttribute('placeholder', 'Player 2 Name');
        p2Input.setAttribute('id', 'p2');
        buttonDiv.classList.add('buttons');
        backButton.setAttribute('id', 'back');
        playButton.setAttribute('id', 'play');
        head.textContent = 'Choose Your Gamemode:';
        backButton.textContent = 'Back';
        playButton.textContent = 'Play';
        buttonDiv.appendChild(backButton);
        buttonDiv.appendChild(playButton);
        modalDiv.appendChild(head);
        modalDiv.appendChild(p1Input);
        modalDiv.appendChild(p2Input);
        modalDiv.appendChild(buttonDiv);
        modalContainer.appendChild(modalDiv);
        const _playPVP = () => { // Hides modal and displays board
            if (!p1Input.value || !p2Input.value) return
            const player1 = Player(p1Input.value, 'X', true);
            const player2 = Player(p2Input.value, 'O', false);
            const modalContainer = document.querySelector('.start');
            modalContainer.classList.remove('show');
            cells.forEach(cell => cell.addEventListener('click', player1.makeMove));
        }
        playButton.addEventListener('click', _playPVP);
        backButton.addEventListener('click', _backToMain);
    }

    const _backToMain = () => { // Goes back to very start of website
        const modalContainer = document.querySelector('.start');
        modalContainer.innerHTML = '';
        const modalDiv = document.createElement('div');
        const head = document.createElement('h1');
        const pvpButton = document.createElement('button');
        const pveButton = document.createElement('button');
        const linebreak = document.createElement('div');
        modalDiv.classList.add('modal');
        modalDiv.classList.add('buttons');
        pvpButton.setAttribute('id', 'pvp');
        pveButton.setAttribute('id', 'pve');
        linebreak.classList.add('linebreak');
        head.textContent = 'Choose Your Gamemode:';
        pvpButton.textContent = 'Player Vs. Player';
        pveButton.textContent = 'Player Vs. A.I.';
        modalDiv.appendChild(head);
        modalDiv.appendChild(pvpButton);
        modalDiv.appendChild(linebreak);
        modalDiv.appendChild(pveButton);
        modalContainer.appendChild(modalDiv);
        pvpButton.addEventListener('click', createPVPDOM);
    }

    return { createPVPDOM };

})();

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
            GameEnd.player1Winner();
        } else if ((gameboard[0] === 'O' && gameboard[1] === 'O' && gameboard[2] === 'O') ||
            (gameboard[3] === 'O' && gameboard[4] === 'O' && gameboard[5] === 'O') ||
            (gameboard[6] === 'O' && gameboard[7] === 'O' && gameboard[8] === 'O') ||
            (gameboard[0] === 'O' && gameboard[3] === 'O' && gameboard[6] === 'O') ||
            (gameboard[1] === 'O' && gameboard[4] === 'O' && gameboard[7] === 'O') ||
            (gameboard[2] === 'O' && gameboard[5] === 'O' && gameboard[8] === 'O') ||
            (gameboard[0] === 'O' && gameboard[4] === 'O' && gameboard[8] === 'O') ||
            (gameboard[2] === 'O' && gameboard[4] === 'O' && gameboard[6] === 'O')) {
            GameEnd.player2Winner();
        } else if (gameboard[0] && gameboard[1] && gameboard[2] &&
            gameboard[3] && gameboard[4] && gameboard[5] &&
            gameboard[6] && gameboard[7] && gameboard[8]) {
            GameEnd.tieGame();
        }
    }

    return { gameboard, updateGameboard };

})();

const GameEnd = (function () {

    player1Winner = () => {
        const modalContainer = document.querySelector('.end');
        const head = document.querySelector('.winner');
        modalContainer.classList.add('show');
        head.textContent = `${GameStart.p1Name} is the Winner!`;
    }

    player2Winner = () => {
        const modalContainer = document.querySelector('.end');
        const head = document.querySelector('.winner');
        modalContainer.classList.add('show');
        head.textContent = `${GameStart.p2Name} is the Winner!`;
    }

    tieGame = () => {
        const modalContainer = document.querySelector('.end');
        const head = document.querySelector('.winner');
        modalContainer.classList.add('show');
        head.textContent = 'Tie Game!';
    }

    return { player1Winner, player2Winner, tieGame };

})();

const Player = function (name, xo, playerturn) { // Player Factory Function

    let _x_or_o = xo;

    const getName = () => name;

    let _playerTurn = playerturn;

    const updatePlayerTurn = () => { // Checks if turn is player 1 or player 2
        if (_playerTurn) {
            _playerTurn = false;
        } else {
            _playerTurn = true;
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
        updatePlayerTurn();
    }

    return { makeMove, updatePlayerTurn };
}

pvpButton.addEventListener('click', GameStart.createPVPDOM);