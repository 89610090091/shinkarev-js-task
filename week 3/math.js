// Большинство математический вычислений уже описаны до нас
// И мы можем (читай мы должны) это использовать

// Константы
Math.PI // число ПИ -примерно 3.14
Math.E // число Эйлера - примерно 2.718

// Округление вверх, вниз или до ближайшего целого
const number = 5.6
const result = Math.ceil() // result === 6
const result = Math.floor() // result === 5
// result === 6Math.round()// result === 6

// Возведение в степень
const result = Math.pow(3, 2) // result === 9

// Квадратный корень
const result = Math.sqrt(3) // result === 9

// Поиск минимума и максимума
const result = Math.min(1, 3, 5) // result === 1
const result = Math.max(1, 3, 5) // result === 5

// Получение модуля числа
const result = Math.abs(-5) // result === 5

// Псевдослучайное число от 0 до 1
Math.random()

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}