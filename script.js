//DOM Elements
const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
const clearButton = document.querySelector("#clear");
const displayView = document.querySelector(".display");
const resultButton = document.querySelector(".result");
const decimalButton = document.querySelector("#decimal");


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
            if (operator == "*" || operator || "/") {
                num1 = 1;
            } else num1 = 0;
        }

        if (!num2) {
            if (operator == "*" || operator || "/") {
                num2 = 1;
            } else num2 = 0;
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
let decimalFlag = false;


numberButton.forEach((number) => { 
    number.addEventListener("click", function() {
        inputNumber += number.value;
        displayView.textContent = inputNumber;

        if (number.value == "." && decimalFlag == false) {
            decimalFlag = true;
            decimalButton.setAttribute("value", "");
        } 
    })
});

operatorButton.forEach((operator) => {
    operator.addEventListener("click", function() {
        decimalFlag = false;
        decimalButton.setAttribute("value", ".");

        if (!inputNumber) {
            inputNumber = "0";
        }
        
        if (flag === true && !inputNumber) {
            result = operate(parseFloat(storedNumber), parseFloat(inputNumber), chosenOperator);
            result = Math.round(result * 10000000000) / 10000000000;
            chosenOperator = "";
            displayView.textContent = result;
            flag = false;
        }

        chosenOperator = operator.value;
        storedNumber = displayView.textContent;
        flag = true;
        inputNumber = "";
    })
});

resultButton.addEventListener("click", function() {
    if (chosenOperator == "/" && inputNumber == "0") {
        displayView.textContent = "ERROR";
        inputNumber = "";
        storedNumber = result;
        result = "";
        flag = false;
        decimalFlag = false;
    } else { 
    result = operate(parseFloat(storedNumber), parseFloat(inputNumber), chosenOperator);
    result = Math.round(result * 10000000000) / 10000000000;
    displayView.textContent = result;
    storedNumber = result;
    result = "";
    flag = false;
    decimalFlag = false;
    decimalButton.setAttribute("value", ".");
    }
});

clearButton.addEventListener("click", function() {
    displayView.textContent = 0;
    decimalButton.setAttribute("value", ".");
    chosenOperator = "";
    firstNumber = "";
    storedNumber = "";
    result = "";
    flag = false;
    decimalFlag = false;
});