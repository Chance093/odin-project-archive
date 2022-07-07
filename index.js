// DOM NODES
const digitBtns = document.querySelectorAll('.digits button');
const operatorBtns = document.querySelectorAll('.operators button');
const leftOperand = document.querySelector('.left-operand');
const midOperator = document.querySelector('.operator');
const rightOperand = document.querySelector('.right-operand');
const answer = document.querySelector('.answer');
const equals = document.querySelector('.equal');
const clearBtn = document.querySelector('.clear');
const decimal = document.querySelector('.decimal');
const backspaceBtn = document.querySelector('.backspace');
const clearEntryBtn = document.querySelector('.clear-entry');


// FUNCTIONS
function add(a, b) { // Function for + operator (Callback)
    return a + b;
}

function subtract(a, b) { // Function for - operator (Callback)
    return a - b;
}

function multiply(a, b) { // Function for * operator (Callback)
    return a * b;
}

function divide(a, b) { // Function for / operator (Callback)
    if (!b) return 'You thought'
    return a / b;
}

function operate(a, b, math) { // Will operate on expression (Callback)
    return math(a, b);
}

function clearDisplay() { // Clears display of all text
    leftOperand.innerText = '';
    midOperator.innerText = '';
    rightOperand.innerText = '';
    answer.innerText = '';
}

function clearEntry() { // Clear the latest entry on the display
    if (!midOperator.innerText) {
        leftOperand.innerText = '';
    } else {
        rightOperand.innerText = '';
    }
}

function backspace() { // Delete latest character entered
    if (!midOperator.innerText) {
        leftOperand.innerText = leftOperand.innerText.slice(0, -1);
    } else {
        rightOperand.innerText = rightOperand.innerText.slice(0, -1);
    }
}

function inputDigit() { // Inputs digit onto display (Callback)
    if (answer.innerText) {
        clearDisplay();
        leftOperand.innerText += this.innerText;
    } else if (!midOperator.innerText) {
        leftOperand.innerText += this.innerText;
    } else {
        rightOperand.innerText += this.innerText;
    }
}

function inputDecimal() { // Input decimal onto display (Callback)
    if (!midOperator.innerText) {
        if (leftOperand.innerText.includes('.')) return;
        leftOperand.innerText += this.innerText;
    } else {
        if (rightOperand.innerText.includes('.')) return;
        rightOperand.innerText += this.innerText;
    }
}

function inputOperator() { // Inputs operator onto display (Callback)
    if (answer.innerText) {
        leftOperand.innerText = answer.innerText;
        answer.innerText = '';
        midOperator.innerText += this.innerText;
    } else if (!midOperator.innerText) {
        midOperator.innerText += this.innerText;
    } else if (midOperator.innerText && rightOperand.innerText) {
        runExpression();
        leftOperand.innerText = answer.innerText;
        answer.innerText = '';
        midOperator.innerText += this.innerText;
    }
}

function runExpression() { // Runs expression that is on display
    if (leftOperand.innerText && midOperator.innerText && rightOperand.innerText) {
        switch (midOperator.innerText) {
            case '+': {
                let result = operate(parseFloat(leftOperand.innerText),
                    parseFloat(rightOperand.innerText), add);
                clearDisplay();
                answer.innerText = result;
                break;
            }
            case '-': {
                let result = operate(parseFloat(leftOperand.innerText),
                    parseFloat(rightOperand.innerText), subtract);
                clearDisplay();
                answer.innerText = result;
                break;
            }
            case '*': {
                let result = operate(parseFloat(leftOperand.innerText),
                    parseFloat(rightOperand.innerText), multiply);
                clearDisplay();
                answer.innerText = result;
                break;
            }
            case '/': {
                let result = operate(parseFloat(leftOperand.innerText),
                    parseFloat(rightOperand.innerText), divide);
                clearDisplay();
                answer.innerText = result;
                break;
            }
        }
    }
}


// EVENT LISTENERS
digitBtns.forEach(button => button.addEventListener('click', inputDigit))
operatorBtns.forEach(button => button.addEventListener('click', inputOperator))
equals.addEventListener('click', runExpression);
clearBtn.addEventListener('click', clearDisplay);
clearEntryBtn.addEventListener('click', clearEntry);
decimal.addEventListener('click', inputDecimal);
backspaceBtn.addEventListener('click', backspace);