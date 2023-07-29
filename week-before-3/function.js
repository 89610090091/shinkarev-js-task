// function
function calc(a, b) {
    return a + b
}

let result = calc(2, 6)

const result = calc(2, 3)

// arrow function
const calc = (a, b) => {
    return a + b;
}

// function extention
const fooName = () => {

}

// function 
function fooName() {

}

// Closures 
function foo1() {
    const x = 1;
    return function foo2() {
        console.log('рузультат', x);
    }
}

const foo = foo1();
foo();