const container = document.querySelector('.container');

function createCanvas() {
    for (let i = 1; i <= 16; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('start', 'rowDiv');
        container.appendChild(rowDiv);
        for (let j = 1; j <= 16; j++) {
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


