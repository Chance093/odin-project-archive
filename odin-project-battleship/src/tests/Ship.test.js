import {Ship} from '../Ship';

test('calcShipCoords: Finds all coords for a1 and a4', () => {
    let ship = Ship('a1', 'a4');
    expect(ship.shipCoords).toStrictEqual(['a1', 'a2', 'a3', 'a4']);
});

test('calcShipCoords: Finds all coords for d4 and d6', () => {
    let ship = Ship('d4', 'd6');
    expect(ship.shipCoords).toStrictEqual(['d4', 'd5', 'd6']);
});

test('calcShipCoords: Finds all coords for a1 and d1', () => {
    let ship = Ship('a1', 'd1');
    expect(ship.shipCoords).toStrictEqual(['a1', 'b1', 'c1', 'd1']);
});

test('calcShipCoords: Finds all coords for e4 and h4', () => {
    let ship = Ship('e4', 'h4');
    expect(ship.shipCoords).toStrictEqual(['e4', 'f4', 'g4', 'h4']);
});

test('hit and checkIfSunk: Ship with 2 health hit 2 times', () => {
    let ship = Ship('a1', 'a2');
    ship.hit();
    ship.hit();
    expect(ship.getIsSunk()).toBe(true);
});

test('hit and checkIfSunk: Ship with 3 health hit 2 times', () => {
    let ship = Ship('a1', 'a3');
    ship.hit();
    ship.hit();
    expect(ship.getIsSunk()).toBe(false);
})