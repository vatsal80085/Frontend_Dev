//Strings
//Primitive Datatype, Object datatype
//string is immutable
let a = "Yo";
let b = 'Moshi Moshi';
let c = `Yokuzo watashi no Soul Society`; //ES6 Template Literals

let d = a+" "+b;
let e = a.concat(" ",b);
console.log(d); //Concatenation

let f = `${a} ${b} - ${c}`; //Template Literals
console.log(`Value of f: ${f}`);

//String InBuilt Methods
let str = "Hello World! Welcome to JavaScript";

//Length
console.log(str.length);

//toUpperCase & toLowerCase
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//Slice
console.log(str.slice(0,5)); //Hello
console.log(str.slice(6)); //World! Welcome to JavaScript

//Replace
let newStr = str.replace("World", "Universe");
console.log(newStr); //Hello Universe! Welcome to JavaScript

//Includes
console.log(str.includes("JavaScript")); //true
console.log(str.includes("Python")); //false

//IndexOf
console.log(str.indexOf("Welcome")); //13
console.log(str.indexOf("Java")); //21

//Split
let words = str.split(" ");
console.log(words); //["Hello", "World!", "Welcome", "to", "JavaScript"]

//Trim
let strWithSpaces = "   Hello World!   ";
console.log(strWithSpaces.trim()); //Hello World!