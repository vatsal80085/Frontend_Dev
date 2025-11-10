// console.log("One Piece detour script loaded.");

// //type of operator
// console.log(`Type of pirateName: ${typeof pirateName}`);
// console.log(`Type of crewSize: ${typeof crewSize}`);
// console.log(`Type of isCaptain: ${typeof isCaptain}`);
// console.log(`Type of favoriteDevilFruit: ${typeof favoriteDevilFruit}`);
// console.log(`Type of bounty: ${typeof bounty}`);
// console.log(`Type of uniqueId: ${typeof uniqueId}`);


// let crew = {"Zoro":"Swordsman", "Sanji":"Cook", "Jimbei":"Helmsman"};
// console.log(crew);
// console.log(crew.Zoro);

// console.log(typeof(crew));

// //Array
// let ships = [1, 2, 3, 4, 5];
// console.log(ships);
// console.log(typeof(ships));

//operators
//Arithemetic Operators
let a = 10;
let b = 5;
console.log(`a + b = ${a + b}`);
console.log(`a - b = ${a - b}`);
console.log(`a * b = ${a * b}`);
console.log(`a / b = ${a / b}`);
console.log(`a % b = ${a % b}`);
console.log(`a ** b = ${a ** b}`);

//Assignment Operators
let c = 20;
;console.log(`Initial value of c: ${c}`);
c += 5; // c = c + 5
console.log(`c after += 5: ${c}`);
c -= 3; // c = c - 3
console.log(`c after -= 3: ${c}`);
c *= 2; // c = c * 2
console.log(`c after *= 2: ${c}`);
c /= 4; // c = c / 4
console.log(`c after /= 4: ${c}`);
c %= 3; // c = c % 3
console.log(`c after %= 3: ${c}`);

//Relational Operators
console.log(`a == b: ${a == b}`);
console.log(`a != b: ${a != b}`);
console.log(`a > b: ${a > b}`);
console.log(`a < b: ${a < b}`);
console.log(`a >= b: ${a >= b}`);
console.log(`a <= b: ${a <= b}`);

//Logical Operators
let isPirate = true;
let hasShip = false;
console.log(`isPirate && hasShip: ${isPirate && hasShip}`);
console.log(`isPirate || hasShip: ${isPirate || hasShip}`);
console.log(`!isPirate: ${!isPirate}`);

//Ternary Operator
let status = isPirate ? "Pirate" : "Not a Pirate";
console.log(`Status: ${status}`);

//nullish Coalescing Operator
let treasure = null;
let defaultTreasure = "Gold";
let finalTreasure = treasure ?? defaultTreasure;
console.log(`Final Treasure: ${finalTreasure}`);
