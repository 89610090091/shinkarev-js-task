// 1
function nod(x, y) {
    if (y === 0) {
        return x;
    }

    return nod(y, x % y);
}


// 2
function findMax(n, _max = -Infinity) {
    let min = n % 10
    let max = parseInt(n / 10)
    if (n < 10) {
        return n;
    }

    return calcMinMax(min, findMax(max))
}

// 3
let num = prompt('enter your number')

function isSimple(num, div = 2) {
    if (num / 2 < div) {
        return true;
    }

    if (num % div === 0) {
        return false
    }

    return isSimple(num, ++div)
}


// 4
// Fibonacci Numbers - 1 1 2 3 5 8 13 21 34 55 89 144 233...

function fib(n) {
    if (n == 1 || n == 2) {
        return 1;
    }

    return fib(n - 2) + fib(n - 1);
}

// fib(3)
// fib(1) + fib(2)
// 1 + 1