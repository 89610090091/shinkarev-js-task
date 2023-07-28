// 1
function searchMin(a, b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}

// 2
function calcDegree(num, degree) {
    return num ** degree;
}

// 3
function calc(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    return result;
}

// 4
function isSimple(num) {
    if (num < 0 || num - Math.floor(num) !== 0) {
        return false;
    } else {
        return true;
    }
}
// 5
function getCalcTable(number) {
    for (let index = 1; index <= 10; index++) {
        console.log(`$(number)x${index}=${number * index}`);
    }
}

// 6 
function getTail(num1, num2) {
    let tail = num1;
    while (tail >= num2) {
        tail -= num2;
    }
}

console.log(getTail(4, 5));

// 7
function calcSum(num1, num2, num3, num4, num5) {
    let result = 0;

    if (num1 !== undefined) {
        // result = result + num1
        result += num1
    }

    if (num2 !== undefined) {
        result += num2
    }

    if (num3 !== undefined) {
        result += num3
    }

    if (num4 !== undefined) {
        result += num4
    }

    if (num5 !== undefined) {
        result += num5
    }

    return result;
}

