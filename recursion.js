// Массивоподобный объект arguments
// Содержит все передаваемые аргументы. Доступ осуществляется по индексу.
// Позволяет функции получать любое кол-во аргументов.
// Нельзя использовать методы массива.
function foo() {
    for (let index = 0; index < arguments.length; index++) {
        console.log(arguments[index]);
    }
}

// аналог начиная с ES6 - spread syntax
// ( нет в курсе. кому интересно, читать тут 
//    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax )
function foo(...argsArrayName) {
    argsArrayName.forEach(arg => console.log(arg))
}
// Собирает все аргументы в массив с произвольным именем и позволяет использовать методы массива.


// Область видимости переменных.

// поднятие / хостинг
var x = 5;
function foo() {
    console.log(x); // undefined
    var x = 1;
    console.log(x); // 1
}
console.log(x); // 5

// глобальные переменные
function foo() {
    x = 1;
}

function foo() {
    console.log(x); // 1
}

// плохой пример
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


// Рекурсия - вызов функцией самой себя
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
// результаты работы

