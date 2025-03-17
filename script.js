//DOM Elements
const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
const clearButton = document.querySelectorAll(".clear");
const displayView = document.querySelector(".display");
const resultButton = document.querySelector(".result");


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

let firstNumber = "";
let storedNumber = "";
let chosenOperator = "";
let result = "";
displayView.textContent = 0;

numberButton.forEach((number) => { 
    number.addEventListener("click", function() {
        firstNumber += number.value;
        displayView.textContent = firstNumber;
    })
});

operatorButton.forEach((operator) => {
    operator.addEventListener("click", function() {
        chosenOperator = operator.value;
        displayView.textContent = firstNumber + " " + chosenOperator;
        storedNumber = firstNumber;
        firstNumber = "";
    })
});

resultButton.addEventListener("click", function() {
    result = operate(parseInt(storedNumber), parseInt(firstNumber), chosenOperator);
    displayView.textContent = result;
});
