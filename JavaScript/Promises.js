
//Promises are used to handle asynchronous operations in JavaScript. They represent a value that may be available now, or in the future, or never.

//Here is an example of how to create and use Promises:
function a() {
    return new Promise((resolve) => {
        console.log("first")
        resolve()
    })
}
function b() {
    return new Promise((resolve) => {
        console.log("Second")
        resolve()
    })
}
function c() {
    return new Promise((resolve) => {
        console.log("Third")
        resolve()
    })
}

a()
    .then(b)
    .then(c)
.catch((err)=>console.log("Not Executed"))



async function run() {
    await a()
    await b()
    await c()
}
run()

//In this example, we define three functions a, b, and c that return Promises. Each function logs a message to the console and then resolves the Promise. We then chain these functions using .then() to ensure they execute in order. Additionally, we demonstrate the use of async/await syntax to achieve the same sequential execution in the run function.

//OOPs

//Inheritance

class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInfo()
    {
        console.log(`Name: ${this.name}, Age: ${this.age}`)
    }
}

class Student extends Person {
    constructor(name, age) {
        super(name,age)
    }
}

const stndt = new Student("Vatsal", 21);
stndt.showInfo();

//Encapsulation

class BankAccount {
    #balance; // private field

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: ${amount}`);
        } else {
            console.log("Deposit amount must be positive");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: ${amount}`);
        } else {
            console.log("Insufficient balance or invalid amount");
        }
    }

    getBalance() {
        return this.#balance;
    }
}

//abstraction

class Demo{
    display(){
        console.log("This is a demo class")
    }
}

class Demo2 extends Demo{
    show(){
        console.log("This is demo2 class")
    }
}

const obj = new Demo2();
obj.display();
obj.show();