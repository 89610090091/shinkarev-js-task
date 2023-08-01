// 1.1
// const array = [1, 5, 6, 1, 0, 8, 9, 19, 94, 5];

function writeArray(array) {
    console.log(array.join(', '));
}

// 1.2
function writeEvenElementsOfArray(array) {
    const filtredArray = array.filter((item) => item % 2 === 0);
    writeArray(filtredArray);
}

// 1.3
function calcSum(array) {
    const reducer = (accum, current) => {
        return accum + current;
    }
    return array.reduce(reducer)
}

// 1.4
function getMax(array) {
    return Math.max(...array);
}

const array = [1, 6, 7, 5];
// 1.5
function insert(array, value, index) {
    let result = [];

    result = result.concat(array.slice(0, index));
    result.push(value);
    result = result.concat(array.slice(index))

    return result;
}

// 1.6
function remove(array, index) {
    let result = [];

    if (index === array.length - 1) {
        // if you need to delete the last element
        result = array.slice();
        result.pop();
    } else {
        result = result.concat(array.slice(0, index));
        result = result.concat(array.slice(index + 1));
    }

    return result;
}


// 2.1
const array1 = [1, 2, 3];
const array2 = [2, 3, 4, 5, 6, 7];

function concatUnique(array1, array2) {
    let result = array1;

    array2.forEach((item) => {
        if (!result.includes(item)) {
            result.push(item);
        }
    })

    return result;
}

// 2.2
function getCrosses(array1, array2) {
    let result = [];

    array2.forEach((item) => {
        if (array1.includes(item)) {
            result.push(item);
        }
    })

    return result;
}

// 2.3
// similarly 2.2

// 3.1
function ignogeCaseComparer(str1, str2) {
    if (str1.toLowerCase() > str2.toLowerCase()) {
        return 1;
    } else if (str1.toLowerCase() < str2.toLowerCase()) {
        return -1;
    } else {
        return 0;
    }
}

const fruits = ['яблоко', 'Апельсин', 'Груша', 'ананас'];
fruits.sort(ignogeCaseComparer);

function writeFruitsList(fruitsArray) {
    const fruitList = document.createElement('ul');
    fruitsArray.forEach((fruit) => {
        const fruitListItem = document.createElement('li');
        fruitListItem.innerText = fruit;
        fruitList.append(fruitListItem);
    });

    document.body.append(fruitList);
}

writeFruitsList(fruits);


function indexOfFruit(fruitList, fruitName) {
    // we bring each element to the lower case
    // ['apple', 'orange', 'pear', 'pineapple']
    return fruitList.map((fruit) => fruit.toLowerCase())
        .indexOf(fruitName.toLowerCase()); // looking for the pineapple index
}


