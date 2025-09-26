import {Ship} from './Ship';

function Gameboard() {
    const ships = [];
    const missedAttacks = [];
    let isGameOver = false;

    function placeShip(c1, c2) {
        ships.push(Ship(c1, c2));
    }

    function checkGameOver() {
        if (ships.every(ship => ship.getIsSunk() === true)) isGameOver = true;
    }

    function receiveAttack(coord) {

    }

    return {missedAttacks, receiveAttack}
}

export {Gameboard}