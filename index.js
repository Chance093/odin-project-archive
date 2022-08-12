

const Gameboard = (function () {
    const gameboard = ['X', 'X', 'O', 'X', 'O', 'X', 'O', 'O', 'X'];
    const displayGameboard = () => {
        gameboard.forEach((element, index) => {
            let cell = document.querySelector(`.cell${index}`)
            cell.textContent = element;
        })
    };
    return { displayGameboard };
})();

Gameboard.displayGameboard();

const Player = function (name, age) {
    const displayName = () => console.log(name);
    const displayAge = () => console.log(age);
    return { displayName, displayAge };
}

const joe = Player('Joe', 40);
const jim = Player('Jim', 23);