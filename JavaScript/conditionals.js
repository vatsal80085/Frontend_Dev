//Control flow using conditionals
let age = 20;

if (age < 18) {
    console.log("You are a minor.");
} else if (age >= 18 && age < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior citizen.");
}

//Using switch statement
let day = 3;    
let dayName;    
switch (day) {
    case 1:
        dayName = "Monday";
        break;              
    case 2:
        dayName = "Tuesday";
        break;              
    case 3:
        dayName = "Wednesday";
        break;              
    case 4:
        dayName = "Thursday";
        break;              
    case 5:
        dayName = "Friday";
        break;              
    case 6:
        dayName = "Saturday";
        break;              
    case 7:
        dayName = "Sunday";
        break;              
    default:
        dayName = "Invalid day";
}
console.log(`Day ${day} is ${dayName}.`);    