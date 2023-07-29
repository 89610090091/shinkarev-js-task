// The arguments array-like object
// Contains all the arguments passed. Access is performed by index.
// Allows the function to get any number of arguments.
// Array methods cannot be used.
function foo() {
    for (let index = 0; index < arguments.length; index++) {
        console.log(arguments[index]);
    }
}

// analog starting from ES6 - spread syntax
// read here
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax )
function foo(...argsArrayName) {
    argsArrayName.forEach(arg => console.log(arg))
}

// Collects all arguments into an array with an arbitrary name and allows using array methods.
// Scope of variables.
// raising / hosting
var x = 5;
function foo() {
    console.log(x); // undefined
    var x = 1;
    console.log(x); // 1
}
console.log(x); // 5

// global variables
function foo() {
    x = 1;
}

function foo() {
    console.log(x); // 1
}

// bad example
function foo(...args) {
    for (i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

for (i = 0; i < 3; i++) {
    foo(1, 5, 6, 7, 1)
}

// let / const
function foo() {
    if (true) {
        let x = 1;
        const y = 2;
        var z = 3;
        if (true) {
            x = 10;
            console.log(x); // 1
            console.log(y); // 2
            console.log(z); // 3
        }
    }
    console.log(x); // undefined
    console.log(y); // undefined
    console.log(z); // 3
}


// Recursion - a function calling itself
function foo(x) {
    if (x.length <= 10) {
        // логику
        return foo(x + '^')
    }
}

console.log(foo('*'));

foo('*')
foo('*^' + '^')
foo('*^^')
foo('*^^^')
foo('*^^^^')
