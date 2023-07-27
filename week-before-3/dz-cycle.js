// 1
const min = prompt('enter the minimum');
const max = prompt('enter the max');

for (let index = min; index < max; index++) {
    sum += index;
}

// 2
const num = prompt('enter the mumber');
for (let index = 1; index <= num; index++) {
    if (num % index === 0) {
        alert(index);
    }
}

// 3
const num = prompt('enter the mumber');
alert(String(num).length);

// 4
let num;
let evenCount = 0;
let negativeCount = 0;
let positiveCount = 0;
let zeroCount = 0;

for (let index = 0; index < 3; index++) {
    num = prompt('inter');
    if (num % 2 === 0) {
        evenCount++;
    } else if (num > 0) {
        positiveCount++;
    } else {
        zeroCount++;
    }
}

// 5
let num1;
let num2;
let operator;
let result;
let isContinue = true;

while (isContinue) {
    num1 = prompt('1 number');
    num2 = prompt('2 number');
    operator = prompt('operator');

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

    alert(`calculation result: ${result}`);
    isContinue = confirm('Continue?');
}

// 6
let num = prompt('enter the mumber');
let shift = prompt('enter the shift');

let symbols = String(num).split('');
const result = [];

for (let index = shift; symbols.length !== result.length; index++) {
    result.push(symbols[index]);
    if (index === symbols.length - 1) {
        index = 0
    }
}

// 7 
const = days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];

let daysIndex = 0;
let isContinue;

do {
    if (daysIndex === days.length) {
        daysIndex = 0;
    }
    isContinue = confirm(`now ${days[daysIndex]}. do you want to continue?`);
    daysIndex++;
} while (isContinue)

// 8 

for (let index = 2; index <= 9; index++) {
    let line = ''

    for (let factor = 1; factor <= 10; factor++) {
        line += `${index * factor} `;
    }

    console.log(line);
}

// 9 
let min = 0;
let max = 100;
let isFinded = false;
while (!isFinded) {
    let assumption = ((max - min) / 2) + min;
    isFinded = confirm(`${Math.floor(assumption)} это оно`);
    if (!isFinded) {
        let isBiger = confirm('загаданное число больше?');
        if (isBiger) {
            min = assumption;
        } else {
            max = assumption;
        }
    }
}

do {
    let assumption = (max - min) / 2
    let result = confirm(`${assumption} оно?`)
} while (result)


