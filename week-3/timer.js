function callback() {
    console.log('hello');
}

// We have the opportunity to execute some code after a certain time
setTimeout(callback, 2000) // // takes a function to be executed and milliseconds

// And also we can execute the code continuously with a certain time interval.
setInterval(callback, 2000)// // also accepts the function and milliseconds

// Often there is a need to cancel the timer
// To do this, you need to remember the timer ID when creating it
const id = setTimeout(callback, 2000)
const id = setInterval(callback, 2000)

// And pass it to the appropriate undo function
clearTimeout(id)
clearInterval(id)

// // A counter that adds +1 to counter every second and stops
// when counter === 10
let counter = 1
let id = setInterval(() => {
    console.log(counter);
    counter++;
    if (counter === 10) {
        clearInterval(id);
    }
}, 1000)