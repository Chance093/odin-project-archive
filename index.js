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

    return { displayGameboard, updateGameboard };

})();

Gameboard.displayGameboard();

const Player = function (xo) {
    const x_or_o = xo;

    const makeMove = (e) => {
        e.target.innerText = x_or_o;
        Gameboard.updateGameboard();
    }

    return { makeMove };
}

const chance = Player('X');

cells.forEach(cell => cell.addEventListener('click', chance.makeMove));

