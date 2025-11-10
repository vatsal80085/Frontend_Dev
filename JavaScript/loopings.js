//Control flow using conditionals

let age = 20;

// Using for loop
for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i + 1}: You are ${age} years old.`);
    age++;
}

// Using for-of loop
let fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
    console.log(`Fruit: ${fruit}`);
}

// Using while loop
let count = 0;
while (count < 3) {
    console.log(`Count is: ${count}`);
    count++;
}

// Using do-while loop
let num = 5;
do {
    console.log(`Number is: ${num}`);
    num--;
} while (num > 0);