// 1
function foo(num1, num2) {
    if (num1 < num2) {
        return -1;
    } else if (num1 > num2) {
        return 1;
    } else {
        return 0;
    }
}

// 2
function calcFactorial(num) {
    if (num === 1 || num === 0) {
        return 1;
    }


    for (let index = num - 1; index > 0; index--) {
        num = num * index;
    }

    return num;
}

// 3
function foo(a, b, c) {
    return Number(`${a}${b}${c}`)
}

// 4
function calcArea(a, b) {
    if (b === undefined) {
        return a ** 2;
    }

    return a * b;
}

// 5
function foo(x) {
    const arr = [];
    let sum = 0;

    for (let index = 1; index < x; index++) {
        if (x % index == 0) {
            arr.push(index)
        }
    }

    for (let index = 0; index < arr.length; index++) {
        sum += arr[index]
    }

    return x === sum ? true : false;
}

// 6
function foo2(min, max) {
    const arr = [];

    for (let index = min; index <= max; index++) {
        if (foo(index)) {
            arr.push(index);
        }
    }

    return arr;
}

// 7
function formatTime(hours, minuts = '0', seconds = '0') {
    hours = hours < 10 ? `0${hours}` : hours;
    minuts = minuts < 10 ? `0${minuts}` : minuts;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${hours}:${minuts}:${seconds}`;
}

// 8
function calcSeconds(hours, minuts = 0, seconds = 0) {
    return hours * 3600 + minuts * 60 + seconds;
}

// 9
function calcTime(seconds) {
    let hours;
    let minuts;

    hours = Math.floor(seconds / 3600);
    minuts = Math.abs(hours * 60 - Math.floor(seconds / 60));

    seconds = seconds - hours * 3600 - minuts * 60

    return formatTime(hours, minuts, seconds)
}

// 10
function foo(h1, m1, s1, h2, m2, s2) {
    let delta = calcSeconds(h1, m1, s1) - calcSeconds(h2, m2, s2);
    let x = Math.abs(delta);

    return calcTime(x);
}