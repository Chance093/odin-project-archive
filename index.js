const container = document.querySelector('.container');

for (let i = 1; i <= 16; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('start');
    container.appendChild(rowDiv);
}