function Ship(c1, c2) {
    const shipCoords = calcShipCoords();
    let lives = shipCoords.length;
    let isSunk = false;

    function calcShipCoords() {
        const [x1, y1] = c1.split('');
        const [x2, y2] = c2.split('');
        const shipCoords = [];
        if (x1 === x2){
            for(let i = y1; i <= y2; i++){
                shipCoords.push(`${x1}${i}`);
            }
        } else if (y1 === y2) {
            let ref = {'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7, 'i': 8, 'j': 9};
            for(let i = ref[x1]; i<= ref[x2]; i++){
                shipCoords.push(`${String.fromCharCode(97 + i)}${y1}`)
            }
            
        }
        return shipCoords;
    }

    function checkIfSunk() {
        if(lives === 0) isSunk = true;
    }

    function hit() {
        lives--;
        checkIfSunk();
    }

    return {shipCoords}
}

export {Ship};

