// Creating objects
// Literal
const myObj = {};

// operator
const myObj = new Object();

// Adding properties / methods
// through a dot
myObj.myField = 'hello!';

// square brackets
myObj['my-Field'] = 'hello!';

//literal object creation
const myObj = {
    myField: 'hello',
    myMethod: function () {
        console.log('Hello!');
    }
};

// example 
const iam = {
    name: 'Dmitrii',
    speed: 50,
    sayHello: function (asd) {
        console.log(`Hello, my name is ${this.name}`);
    }
};

iam.sayHello(asd)

// Deleting Properties
delete myObj.myField;
delete myObj['myField'];

// Checking the property of an object
if ('myField' in myObj) {

}
// Checking the property of an object
myObj.hasOwnProperty('myField')

// Iterating through object properties
const myObj = {
    a: 1,
    b: 2,
    c: 3,
}

for (let field in myObj) {
    // Some code. Accessing the property via myObj[field]
}

Object.keys(myObj).forEach((field) => {
    // Some code. Accessing the property via myObj[field]
})

// and if the values are needed immediately, then
Object.values(myObj).forEach((value) => {
    // Some code. value stores property values.
})

// The course omitted the syntax of classes, as well as the concept of "constructor function".
// Very important topics! After the course, study the constructor functions yourself first, then the classes.
// In modern OOP, it is the syntax of classes that is used.

// class syntax
class User {
    name;
    age;
    adress;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// constructor function
function User(name, age) {
    this.name = name;
    this.age = age;
}