// class hoisting
class Student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    show(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const student1 = new Student("Vatsal",20); 
student1.show()


//object second way -> json
const student2={
    Name:"Vatsal",
    Age:20,
    ID: 80085,
    Department:"Computer Engineering",
}

// One way -> Empty Object
const car=new Object();
car.name="BMW";
car.model="X5";
car.year=2020;

//Constructor Function
function Bike(name, price){
    this.name=name;
    this.price=price;
    this.greet=function(){ //Anonymous Function(fn with no name)
        console.log(`This is a ${this.name} bike priced at ${this.price}`);
    }
}
const bike1=new Bike("Kawasaki-Ninja", 150000);

//Using Create
const child={
    greet(){
        console.log("Hello from child object");
    }
}
const child1=Object.create(child);
child1.age=20;

// using JSON
const person = '{"name":"Peter Parker", "age":21}'
const jsonObj = JSON.parse(person)// Converted to JSON Object from String
console.log(jsonObj.name);
const stringObj=JSON.stringify(jsonObj);


