// Global scope - Define a function and access a global variable inside and outside the function
let globalVar = "I am a global variable";

function accessGlobal() {
    console.log(globalVar); // Accessing global variable inside the function
}

accessGlobal(); // Calling the function
console.log(globalVar); // Accessing global variable outside the function

// Function scope - Define a Function and access that variable inside and outside the function
function functionScopeExample() {
    let functionVar = "I am a function-scoped variable";
    console.log(functionVar); // Accessing function-scoped variable inside the function
}

functionScopeExample(); // Calling the function
console.log(functionVar); // Uncommenting this line will cause an error: functionVar is not defined

//Block Scope- Define one block and access block variable inside and outside the block

{
    let blockVar="Block Variable";
    console.log(blockVar);
}
//console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined

//Lexical Scope- Define inner function inside outer function and access outer function variable inside inner function call inner fucntion inside outer function scope
function outerFunction(){
    let outerVar="Outer Variable";
    function innerFunction(){
        console.log(outerVar);
    }
    innerFunction();
}
outerFunction();