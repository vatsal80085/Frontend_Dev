// Hoisting-> it is a behavior of javascript where it moves the declarations of variables, functions and classes to the top of their scope during the compilation phase and before the code is executed.

//variable function class hoisting

// //function hoisting
// add();//20
// function add(){
//     console.log(10+10); //fully hoisted
// }

// d() //ReferenceError //var

// d(); // d= undefined
// const d=function sub(){//let const TDZ
//     console.log(10-10);
// }

// console.log(f); //reference error with const
// let f=5;

//class hoisting
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

