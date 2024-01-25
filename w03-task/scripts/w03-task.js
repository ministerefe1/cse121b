/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function addNumbers() {
    let number1 = parseInt(document.getElementById("add1").value)
    let number2 = parseInt(document.getElementById("add2").value)
    let sum = number1 + number2;

    document.getElementById("sum").value = sum;   
};

document.getElementById("addNumbers").addEventListener("click", addNumbers);



/* Function Expression - Subtract Numbers */
function subtractNumbers() {
    let number1 = parseInt(document.getElementById("subtract1").value);
    let number2 = parseInt(document.getElementById("subtract2").value);
    let difference = number1 - number2;

    document.getElementById("difference").value = difference;   
};

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (x, y) => x * y;

const multiplyNumbers = () => {
    let number1 = parseInt(document.getElementById("factor1").value);
    let number2 = parseInt(document.getElementById("factor2").value);
    let product = number1 * number2;

    document.getElementById("product").value = product;
};

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = (x, y) => x / y;

const divideNumbers = () => {
    let dividend = parseFloat(document.getElementById("dividend").value);
    let divisor = parseFloat(document.getElementById("divisor").value);
    let quotient = divide(dividend, divisor);

    document.getElementById("quotient").value = quotient;
};

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);



/* Decision Structure */
function getTotal() {
    //initialize
    let total = 0;
    //input
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    //processing
    if (document.getElementById("member").checked) {
        subtotal = subtotal - subtotal * 0.2;//20% discount
    }

    //output
    document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`;
}

document.getElementById("getTotal").addEventListener("click", getTotal);


//* ARRAY METHODS - Functional Programming */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

/* Output Source Array */
document.getElementById("array").textContent = numbersArray.join(", ");

/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(number => number % 2 !== 0);
document.getElementById("odds").textContent = oddNumbers.join(", ");

/* Output Evens Only Array */
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.getElementById("evens").textContent = evenNumbers.join(", ");

/* Output Sum of Org. Array */
const sum = numbersArray.reduce((accumulator, number) => accumulator + number, 0);
document.getElementById("sumOfArray").textContent = sum;

/* Output Multiplied by 2 Array */
const multipliedBy2 = numbersArray.map(number => number * 2);
document.getElementById("multiplied").textContent = multipliedBy2.join(", ");

/* Output Sum of Multiplied by 2 Array */
const sumOfMultipliedBy2 = multipliedBy2.reduce((accumulator, number) => accumulator + number, 0);
document.getElementById("sumOfMultiplied").textContent = sumOfMultipliedBy2;
