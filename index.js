const body = document.querySelector('body');
const sizeBtn = document.querySelector('.size');
const resetBtn = document.querySelector('.reset');
let container = document.querySelector('.container');
let pixels = 16;

function createCanvas() { // CREATES CANVAS AND ALLOWS YOU TO PAINT ON IT
    for (let i = 1; i <= `${pixels}`; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('start', 'rowDiv');
        container.appendChild(rowDiv);
        for (let j = 1; j <= `${pixels}`; j++) {
            const columnDiv = document.createElement('div');
            columnDiv.classList.add('start', 'columnDiv');
            rowDiv.appendChild(columnDiv);
            columnDiv.addEventListener('mouseover', () => {
                columnDiv.classList.add('paint');
            });
        }
    }
}

function resetCanvas() { // RESETS CANVAS TO WHATEVER WAS THE LAST CREATED CANVAS
    body.removeChild(container);
    container = document.createElement('div');
    container.classList.add('container');
    body.appendChild(container);
    createCanvas();
}

function canvasSize() { // ASKS USER WHAT THE CANVAS SIZE SHOULD BE
    pixels = parseInt(prompt('On a scale of 16-100, how big would you like your canvas?'));
    while (pixels < 16 || pixels > 100 || !pixels) {
        pixels = parseInt(prompt('The scale must be from 16-100'));
    }
    resetCanvas();
}

sizeBtn.addEventListener('click', canvasSize);
resetBtn.addEventListener('click', resetCanvas);
createCanvas();


