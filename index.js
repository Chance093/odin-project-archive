const cells = document.querySelectorAll('.cell');
const pvpButton = document.querySelector('#pvp');

const Gameboard = (function () { // Gameboard Module

    const gameboard = ['', '', '', '', '', '', '', '', ''];

    const createPVPDOM = () => {
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
        const playPVP = () => {
            const player1 = Player(p1Input.value, 'X');
            const modalContainer = document.querySelector('.start');
            modalContainer.classList.remove('show');
            cells.forEach(cell => cell.addEventListener('click', player1.makeMove));
        }
        playButton.addEventListener('click', playPVP);
        backButton.addEventListener('click', backToMain);
    }

    const backToMain = () => {
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
        pvpButton.addEventListener('click', Gameboard.createPVPDOM);
    }

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

    return { gameboard, updateGameboard, createPVPDOM };

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

pvpButton.addEventListener('click', Gameboard.createPVPDOM);