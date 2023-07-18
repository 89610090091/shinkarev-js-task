// // 1
const min = prompt('введи min');
const max = prompt('введи max');
let sum = 0;

for (let index = min; index < max; index++) {
    sum = sum + index;
}

// 3
const num = prompt('введи num');
for (let index = 1; index <= num; index++) {
    if (num % index === 0) {
        alert(index);
    }
}

// 4
const num = prompt('введи num');
alert(String(num).length)

// 5
let num;
let evenCount = 0;
let negativeCount = 0;
let positiveCount = 0;
let zeroCount = 0;
for (let index = 0; index < 3; index++) {
    num = prompt('введи')
    if (num % 2 === 0) {
        evenCount++;
    }

    if (num < 0) {
        negativeCount++;
    } else if (num > 0) {
        positiveCount++;
    } else {
        zeroCount++;
    }
}

// // 6
// // let num1;
// // let num2;
// // let operator;
// // let result;
// // let isContinue = true;

// // while (isContinue) {
// //     num1 = prompt('1 число');
// //     num2 = prompt('2 число');
// //     operator = prompt('оператор');

// //     switch (operator) {
// //         case '+':
// //             result = num1 + num2
// //             break;
// //         case '-':
// //             result = num1 - num2
// //             break;
// //         case '*':
// //             result = num1 * num2
// //             break;
// //         case '/':
// //             result = num1 / num2
// //             break;
// //     }

// //     alert(`результат вычислений: ${result}`);
// //     isContinue = confirm('Продолжить?');
// // }

// // 7.1
// // let num = prompt('введи число');
// // let shift = prompt('введи сдвиг');

// // let symbols = String(num).split('');
// // const result = [];

// // for (let index = shift; symbols.length !== result.length; index++) {
// //     result.push(symbols[index]);
// //     if (index === symbols.length - 1) {
// //         index = 0
// //     }
// // }

// // -- 26 38 41 56 11
// // <<2
// // 38 41 56 11 26

// // 8
// // const days = [
// //     'пн',
// //     'вт',
// //     'ср',
// //     'чт',
// //     'пт',
// //     'сб',
// //     'вс',
// // ];
// // let daysIndex = 0;
// // let isContinue;
// // do {
// //     if (daysIndex === days.length) {
// //         daysIndex = 0;
// //     }

// //     isContinue = confirm(`сейчас ${days[daysIndex]}. хотите продолжить?`);
// //     daysIndex++;
// // } while (isContinue)

// // 9
// // for (let index = 2; index <= 9; index++) {
// //     let line = ''

// //     for (let factor = 1; factor <= 10; factor++) {
// //         line += `${index * factor} `;
// //     }

// //     console.log(line);
// // }

// // 10
// // let min = 0;
// // let max = 100;
// // let isFinded = false;
// // while (!isFinded) {
// //     let assumption = ((max - min) / 2) + min;
// //     isFinded = confirm(`${Math.floor(assumption)} это оно`);
// //     if (!isFinded) {
// //         let isBiger = confirm('загаданное число больше?');
// //         if (isBiger) {
// //             min = assumption;
// //         } else {
// //             max = assumption;
// //         }
// //     }
// }


// // do {
// //     let assumption = (max - min) / 2
// //     let result = confirm(`${assumption} оно?`)
// // } while (result)

// // 0-100>50
// // 0-50>25
// // 25-50>25