function callback() {
    console.log('hello');
}

// Мы имеем возможность выполнить код, через определенное
// время setTimeout(callvack, 2000) принимает функция, которая будет выполнена и милисекунды

// А так же мы можем выполнять код непрерывно с определённым промежутком времени.
// setInterval(callback, 2000) так же принимает функцию и милисекунды

// Часто часто возникает потребность отменить таймер
// Для этого нужно при создании запомнить ID таймера

const id = setTimeout(callback, 2000)
const id = setInterval(callback, 2000)

// Передать его в соответсвующую функцию отмены 
clearTimeout(id)
clearInterval(id)

// Счетчик, прибавляющий каждую секунду +1 к counter и остановиливающийся,
// когда conter = 1

let counter = 1;
let id = setInterval(() => {
    console.log(counter);
    counter++;
    if (counter === 10) {
        clearInterval(id);
    }
}, 1000)