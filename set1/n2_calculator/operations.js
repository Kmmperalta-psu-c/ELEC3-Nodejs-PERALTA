// Name: Kristine Mae M. Peralta
// Activity: ELEC 3 - N2 Modular Calculator
// Date: November 24, 2026

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
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return a / b;
}

function average(a, b) {
    return (a + b) / 2;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    average
};