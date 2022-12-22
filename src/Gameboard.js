import {Ship} from './Ship';

function Gameboard() {
    const ships = [];
    const missedAttacks = [];
    let isGameOver = false;

    function placeShip(c1, c2) {
        ships.push(Ship(c1, c2));
    }
}