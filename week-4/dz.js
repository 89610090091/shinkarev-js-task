let buyList = [
    {
        nameOfBuy: 'first',
        quantity: 0,
        bought: false,
    },
    {
        nameOfBuy: 'sec',
        quantity: 0,
        bought: false,
    }, {
        nameOfBuy: 'th',
        quantity: 0,
        bought: false,
    }, {
        nameOfBuy: '4th',
        quantity: 0,
        bought: false,
    },
];

let buy5 = {
    nameOfBuy: '5th',
    quantity: 0,
    bought: false,
}

function foo(a, b) {
    if (a.bought > a.bought) {
        return 1;
    } if (a.bought > a.bought) {
        return -1;
    }
    else return 0;
}

function showBuyList(array) {
    array.sort(foo);
    array.forEach((element) => {
        console.log(element);
    });
}

showBuyList(buyList); // result 

function addBuy(object, array) {
    const buy = array.find((element) => element.nameOfBuy === object.nameOfBuy)
    if (buy) {
        buy.quantity++;
        array.forEach((item) => {
            if (item.nameOfBuy === object.nameOfBuy) {
                item.quantity++;
            }
        });
    }
    else {
        array.push(object);
    }
}

addBuy(buy4, buyList);
console.log(' + buy4   ');
showBuyList(buyList);

function buy(name, array) {
    const x = array.find((element) => element.nameOfBuy === name);
    if (x) {
        x.bought = true
    }
    array.forEach((element) => {
        if (name === element.nameOfBuy) {
            element.bought = true;
        }
    });
}

isBought('4th', buyList);
isBought('sec', buyList);
console.log(' is 4th & sec   ');
showBuyList(buyList);

addBuy(buy5, buyList);
console.log(' + buy5   ');
showBuyList(buyList);

addBuy(buy5, buyList);
console.log(' + buy5   ');
showBuyList(buyList);

addBuy(buy5, buyList);
console.log(' + buy5   ');
showBuyList(buyList);

2
let reciept = [
    {
        name: 'milk',
        quantity: 20,
        price: 45,
    },
    {
        name: 'apple',
        quantity: 5,
        price: 10,
    },
    {
        name: 'silk',
        quantity: 2,
        price: 450,
    },
    {
        name: 'mithrill',
        quantity: 1,
        price: 2000,
    },
];

function comparer(a, b) {
    if (a.price > b.price) {
        return -1;
    } if (a.price < b.price) {
        return 1;
    }
    else return 0;
}

function printReciept(array) {
    array.forEach((element) => {
        let all = element.quantity * element.price;
        console.log(`${element.name} .......... ${element.quantity} * ${element.price} = ${all}`);
    });
}

printReciept(reciept);
console.log(' + + + + ');

function allPrice(array) {
    let sum = 0;
    array.forEach((element) => {
        sum += element.quantity * element.price;
    });
    console.log(`.................................. ALL = ${sum}`);

    return sum;
}

allPrice(reciept); // result 
console.log(' + + + + ');

function maxPrice(array) {
    array.sort(comparer);
    console.log(array[0].name);
}

maxPrice(0reciept);

function calcMidlePrice(array) {
    let buysNumber = 0;
    array.forEach((buy) => {
        buysNumber += buy.quntity;
    })
    console.log(allPrice(array) / buysNumber);
}

// 3 
class CSS {
    name;
    value;
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}

const styles = [
    new CSS('color', 'red'),
    new CSS('fontsize', '21px'),
    new CSS('textAlign', 'center'),
    new CSS('textDecoration', 'underline'),
    {
        name: 'background',
        value: 'green'
    }
];

function write(style, text) {
    const paragraph = document.createElement('p');
    paragraph.innerText = text;

    style.forEach((styel) => {
        paragraph.style[style.name] = style.value;
        // paragraph.style['background'] = 'green';
    })

    document.body.prepend(paragraph)
}

// 4
class Cabinet {
    name;
    value;
    facultet;
    constructor(name, value, facultet) {
        this.name = name;
        this.value = value;
        this.facultet = facultet;
    }
}

const array = [
    new Cabinet('biology', 17, 'biology fac'),
    new Cabinet('math', 12, 'math fac'),
    new Cabinet('geography1', 11, 'geography fac'),
    new Cabinet('geography2', 15, 'geography fac'),
    new Cabinet('geography3', 10, 'geography fac'),
]

function writeCabinets(array) {
    array.forEach((cabinet) => {
        console.log(cabinet.name);
    });
}

function writeCabinetsForFacultet(array, facultet) {
    const bufferArray = array.filter((cabinet) => cabinet.facultet === facultet);

    bufferArray.forEach((cabinet) => {
        console.log(cabinet.name);
    })
}

const group = {
    name: 'group',
    students: 15,
    facultet: 'geography fac',
}

function writeAvailableCabinet(array, group) {
    array.forEach((cabinet) => {
        if (cabinet.facultet === group.facultet && cabinet.value >= group.students) {
            console.log(cabinet.name);
        }
    });
}

function cabinetComparerByValue(cab1, cab2) {
    if (cab1.value < cab2.value) {
        return -1;
    } else if (cab1.value > cab2.value) {
        return 1;
    } else {
        return 0;
    }
}

function sortCabinetsBuValue(cabinets) {
    cabinets.sort(cabinetComparerByValue)
}