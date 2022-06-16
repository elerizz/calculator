const numOne = parseInt(prompt("Enter the first number: "));
const numTwo = parseInt(prompt("Enter the second number: "));
const operator = prompt("Enter an operator among +,-,*,:,%");

function calculator(numOne, numTwo, operator) {
    const numOne = parseInt(prompt("Enter the first number: "));
    const numTwo = parseInt(prompt("Enter the second number: "));
    const operator = prompt("Enter an operator among +,-,*,:,%");

    switch (operator) {
        case "+":
            return numOne + numTwo;
        case "-":
            return numOne - numTwo;
        case "*":
            return numOne * numTwo;
        case ":":
            return numOne / numTwo;
        default "%";
            return numOne / numTwo;
    }
}

console.log(calculator(1,3,9))
