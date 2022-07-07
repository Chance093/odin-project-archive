function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, math) {
    return math(a, b);
}

const digitBtns = document.querySelectorAll('.digits button');
const operatorBtns = document.querySelectorAll('.operators button');
const display = document.querySelector('.display');


digitBtns.forEach((button) => {
    button.addEventListener('click', () => {
        display.innerText += button.innerText;
    })
})

operatorBtns.forEach((button) => {
    button.addEventListener('click', () => {
        display.innerText += button.innerText;
    })
})