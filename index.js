const Gameboard = (function () {
    const gameboard = [['X', 'O', 'X'], ['X', 'O', 'X'], ['X', 'O', 'X']]
    const displayGameboard = () => console.table(gameboard);
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