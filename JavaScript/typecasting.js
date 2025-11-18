//typecasting

// console.log("10"+5)
// console.log(5+"10")
// console.log(true+5)
// console.log(null+5)
// console.log(undefined+5)

// Errors
let d =52
// d.toLowerCase() // Error: d.toLowerCase is not a function

try {
    console.log(10/0);
}
catch (Error) {
    console.log("Error:", Error.message);
}
finally {
    console.log("Execution completed.");
}
