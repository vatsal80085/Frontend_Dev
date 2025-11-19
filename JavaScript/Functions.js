//Functions

//Arrow functions

const add = (a,b)=> a+b;

//Anonymous Functions
// setTimeout(function(){
//     console.log("2 Seconds");
// }, 2000)

//IIFE Immediately Invoked Function Expression 

(function(){
    console.log("IIFE");
    
})();

// Higher Order Function
function greetFn(name){
    console.log("Hello " + name);
}

//fn passes another fn as an argument
function greetUser(greetFn, name){
    return greetFn(name);
}

greetUser(greetFn, "Vatsal");

//Prototype Function

Object.prototype.sayHello = function(){
    console.log("Hello from Prototype");
}

// let b = {
//     name: "Vatsal",
//     age: 20
// }
// b.sayHello(); // Hello from Prototype

//Callback Function
function fetchData(callback){
    setTimeout(function(){
        console.log("Data fetched");
        callback();
    }, 2000);
}

function processData(){
    console.log("Data processed");
}

fetchData(processData);


// Callback functions are widely used in asynchronous programming, event handling, and functional programming paradigms.
// They allow for more flexible and modular code by enabling functions to be passed around and executed at a later time or in response to specific events.

//CallBack Function

//Callback hell example

function a(fun) {
    console.log("first")
    fun()
}

function b(fun) {
    console.log("Second")
    fun()
}

function c() {
    console.log("Third")
}

a(function () {
    b(c)
});

// In the above example, function 'a' calls function 'b' as a callback, and function 'b' calls function 'c' as a callback. This creates a nested structure that can become difficult to read and maintain as more levels of callbacks are added, leading to what is commonly referred to as "callback hell."

// To avoid callback hell, developers often use techniques such as Promises, async/await syntax, or modularizing code into smaller functions.
