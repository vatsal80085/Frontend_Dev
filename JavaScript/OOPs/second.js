
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