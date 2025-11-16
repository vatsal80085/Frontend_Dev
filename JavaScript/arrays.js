// Arrays

let arr=[1,2,3,4,5];

let mapArr = arr.map((x)=>x*2);

let filtArr=arr.filter(x=>x%2==0);

//reduce
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of array elements:", sum);

//shift
let shiftedElement = arr.shift();
console.log("Element removed using shift:", shiftedElement);
console.log("Array after shift:", arr);

//unshift
arr.unshift(0);
console.log("Array after unshift (adding 0 at the beginning):", arr);

//push
arr.push(6);
console.log("Array after push (adding 6 at the end):", arr);

//pop
let poppedElement = arr.pop();
console.log("Element removed using pop:", poppedElement);
console.log("Array after pop:", arr);

console.log("Original Array:", arr);
console.log("Mapped Array (x2):", mapArr);
console.log("Filtered Array (even numbers):", filtArr);      