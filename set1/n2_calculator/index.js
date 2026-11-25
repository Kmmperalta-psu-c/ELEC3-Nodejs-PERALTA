// Name: Kristine Mae M. Peralta
// Activity: ELEC 3 - N2 Modular Calculator
// Date: November 24, 2026

const operations = require("./operations");
const formatResult = require("./formatter");
const os = require("os");

const operation = process.argv[2];
const a = Number(process.argv[3]);
const b = Number(process.argv[4]);

if (!operation || process.argv[3] === undefined || process.argv[4] === undefined) {
    console.log("Usage: node index.js <operation> <number1> <number2>");
    process.exit(1);
}

if (isNaN(a) || isNaN(b)) {
    console.log("Error: Please enter valid numbers.");
    process.exit(1);
}

try {
    let result;
    let symbol;

    switch (operation) {
        case "add":
            result = operations.add(a, b);
            symbol = "+";
            break;

        case "subtract":
            result = operations.subtract(a, b);
            symbol = "-";
            break;

        case "multiply":
            result = operations.multiply(a, b);
            symbol = "*";
            break;

        case "divide":
            result = operations.divide(a, b);
            symbol = "/";
            break;

        case "average":
            result = operations.average(a, b);
            symbol = "average";
            break;

        default:
            throw new Error("Unknown operation. Please use add, subtract, multiply, divide, or average.");
    }

    console.log(formatResult(symbol, a, b, result));
    console.log("Operating System:", os.platform());

} catch (error) {
    console.log("Error:", error.message);
}