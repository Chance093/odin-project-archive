import {Ship} from './Ship';

function Gameboard() {
    const ships = [];
    const missedAttacks = [];
    let isGameOver = false;

    function placeShip(c1, c2) {
        ships.push(Ship(c1, c2));
    }

    function checkGameOver() {
        if (ships.every(ship => ship.isSunk === true)) isGameOver = true;
    }
}