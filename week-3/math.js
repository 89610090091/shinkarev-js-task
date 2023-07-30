// Most mathematical calculations have already been described before us

// Constants
Math.PI // PI number - about 3.14
Math.E // Euler number - about 2.718

// Rounding up, down, or to the nearest integer
const number = 5.6
const result = Math.ceil() // result === 6
const result = Math.floor() // result === 5
// result === 6Math.round()// result === 6

// Exponentiation
const result = Math.pow(3, 2) // result === 9

// Square root
const result = Math.sqrt(3) // result === 9

// Search for minimum and maximum
const result = Math.min(1, 3, 5) // result === 1
const result = Math.max(1, 3, 5) // result === 5

// Getting the number module
const result = Math.abs(-5) // result === 5

// Pseudo-random number from 0 to 1Math.random()

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}