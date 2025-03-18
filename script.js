//DOM Elements
const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
const clearButton = document.querySelector("#clear");
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
    if (!num1) {
        num1 = 0;
    }

    if (!num2) {
        num2 = 0;
    }

    switch(operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return 0;
    }
}

let inputNumber = "";
let storedNumber = "";
let chosenOperator = "";
let result = "0";
let flag = false;


numberButton.forEach((number) => { 
    number.addEventListener("click", function() {
        inputNumber += number.value;
        displayView.textContent = inputNumber;
    })
});

operatorButton.forEach((operator) => {
    operator.addEventListener("click", function() {
        if (!inputNumber) {
            inputNumber = "0";
        }
        
        if (flag === true) {
            result = operate(parseInt(storedNumber), parseInt(inputNumber), chosenOperator);
            displayView.textContent = result;
            flag = false;
        }

        chosenOperator = operator.value;
        storedNumber = displayView.textContent;
        flag = true;

        // displayView.textContent = storedNumber + " " + chosenOperator;
        inputNumber = "";
    })
});

resultButton.addEventListener("click", function() {
    result = operate(parseInt(storedNumber), parseInt(inputNumber), chosenOperator);
    result = Math.round(result * 10000000000) / 10000000000;
    displayView.textContent = result;
    inputNumber = "";
    storedNumber = result;
    result = "";
    flag = false;
});

clearButton.addEventListener("click", function() {
    displayView.textContent = 0;
    firstNumber = "";
    storedNumber = "";
    result = "";
    flag = false;
});