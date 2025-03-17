//Sum of a, b...
function add(a, b) {
    return a + b;
}

//Subtraction of a, b...
function subtract(a, b) {
    return a - b;
}

//Mutiply a, b...
function multiply(a, b) {
    return a * b;
}

//Divide a, b...
function divide(a, b) {
    return a / b;
}

let current = 0;
let first = 0;
let second = 0;

function operate(num1, num2, operator) {
    switch(operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}