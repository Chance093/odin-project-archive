const body = document.querySelector('body');
let container = document.querySelector('.container');
const sizeBtn = document.querySelector('.size');
let pixels = 16;

function createCanvas() {
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
createCanvas();



sizeBtn.addEventListener('click', canvasSize);

function canvasSize() {
    pixels = parseInt(prompt('On a scale of 16-100, how big would you like your canvas?'));
    while (pixels < 16 || pixels > 100 || !pixels) {
        pixels = parseInt(prompt('The scale must be from 16-100'));
    }
    resetCanvas();
    createCanvas();
}

function resetCanvas() {
    body.removeChild(container);
    container = document.createElement('div');
    container.classList.add('container');
    body.appendChild(container);
}
