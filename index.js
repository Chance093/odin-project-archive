const cells = document.querySelectorAll('.cell');

const Gameboard = (function () { // Gameboard Module

    const gameboard = ['', '', '', '', '', '', '', '', ''];

    const displayGameboard = () => { // Displays X and O on board
        gameboard.forEach((element, index) => {
            let cell = document.querySelector(`.cell${index}`)
            cell.textContent = element;
        })
    };

    return { displayGameboard };

})();

Gameboard.displayGameboard();

const Player = function () {
    const xo = 'X';

    const makeMove = (e) => {
        e.target.innerText = xo;
    }

    return { makeMove };
}

const chance = Player('chance', 23);

cells.forEach(cell => cell.addEventListener('click', chance.makeMove));

