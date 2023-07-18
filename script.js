// 1
function stringFrom() {
    let result = '';
    for (let index = 0; index < arguments.length; index++) {
        result += arguments[index];
    }

    return result;
}

// 2
function searchMinArg() {
    let min = arguments[0];

    for (let index = 1; index < arguments.length; index++) {
        if (arguments[index] < min) {
            min = arguments[index];
        }
    }

    return min;
}

// 3
function numbers() {
    let numbersCount = 0;

    for (let index = 0; index < arguments.length; index++) {
        if (typeof (arguments[index]) === 'number') {
            numbersCount++;
        }
    }

    return numbersCount;
}

// 4
function mean() {
    let numCount = 0;
    let sum = 0;

    for (let index = 0; index < arguments.length; index++) {
        if (typeof (arguments[index]) === 'number') {
            numCount++;
            sum += arguments[index];
        }
    }

    return sum / numCount;
}

// 5
function foo(num) {

    if (num === 2) {
        return true;
    }

    if (num < 2) {
        return false;
    }

    return foo(num / 2);
}


// 6
function foo(num) {
    if (num < 10) {
        return num;
    }

    return String(num % 10) + foo(parseInt(num / 10))
}

// 1
function foo(num) {
    if (num === 1) {
        return 1;
    }

    return num * foo(num - 1)
}

// 2
function foo(min, max) {
    if (min !== max) {
        console.log(min);
        foo(min + 1, max)
    } else {
        console.log(max);
    }
}

function foo(min, max) {
    if (min !== max) {
        console.log(max);
        foo(min, max - 1)
    } else {
        console.log(min);
    }
}

// 3
// выше делали

// 4
function foo(num) {
    if (num < 10) {
        return num;
    }

    return num % 10 + foo(parseInt(num / 10))
}

// 5
function foo(num) {
    if (num === 1) {
        return '()'
    }

    return `(${foo(num - 1)})`
}
