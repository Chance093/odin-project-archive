console.log('Hello World');
 
function Ship(c1, c2) {
    const shipCoords = calcShipCoords();
    let lives = 0;
    let isSunk = false;
    
    function calcShipCoords() {
        // Take c1 and c2 and find points between them
        // return an array with each point inside of array
    }

    function checkIfSunk() {
        if(lives === 0) isSunk = true;
    }

    function hit() {
        lives--;
        checkIfSunk();
    }

    return {}
}

export default {Ship};

