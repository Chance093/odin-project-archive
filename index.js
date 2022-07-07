// 1. Click on digits to make left operand
//     - Set up a span inside the div called left operand
//     - Everytime a digit is clicked, it will add button.innerText to span.innerText
// 2. Click on operator to make the operator
//     - Set up a span inside the div called operator
//     - Any digits pressed after this step will be put in the right span
//     - This will let our operator function know which function to use
//     - Only allow one operator to be clicked on
// 3. Click on digits to make right operand
//     - If the operator span has innerText, then add digits to the right span
// 4. Click equal to run a function for the given string
//     - If all 3 spans are filled in, run the function operate()
//     - Reset the display and make the display show the answer
//     - If the operator span shows +, run add()...




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
const leftOperand = document.querySelector('.left-operand');
const midOperator = document.querySelector('.operator');
const rightOperand = document.querySelector('.right-operand');


digitBtns.forEach((button) => {
    button.addEventListener('click', () => {
        if (!midOperator.innerText) {
            leftOperand.innerText += button.innerText;
        } else {
            rightOperand.innerText += button.innerText;
        }
    })
})

operatorBtns.forEach((button) => {
    button.addEventListener('click', () => {
        if (!midOperator.innerText) {
            midOperator.innerText += button.innerText;
        }
    })
})