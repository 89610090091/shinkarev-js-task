// Создание объектов
// Литеральное
const myObj = {};
// Через оператор new (конструктор)
const myObj = new Object();

// Добавление свойств / методов
// через точку
myObj.myField = 'hello!';
// через квадратные скобки
myObj['my-Field'] = 'hello!';
// при литеральном создании объекта
const myObj = {
    myField: 'hello',
    myMethod: function () {
        console.log('Hello!');
    }
};

// пример с занятия
const iam = {
    name: 'Dmitrii',
    speed: 50,
    sayHello: function (asd) {
        console.log(`Hello, my name is ${this.name}`);
    }
};

iam.sayHello(asd)


// Удаление свойств
delete myObj.myField;
delete myObj['myField'];

// Проверка существования свойства у объекта
if ('myField' in myObj) {

}
// аналог на будущее
myObj.hasOwnProperty('myField')

// Перебор всех свойств объекта
const myObj = {
    a: 1,
    b: 2,
    c: 3,
}

for (let field in myObj) {
    // Какой-то код. Обращаемся к свойству через myObj[field]
}
//или
Object.keys(myObj).forEach((field) => {
    // Какой-то код. Обращаемся к свойству через myObj[field]
})
// а если нужны сразу значения, то
Object.values(myObj).forEach((value) => {
    // Какой-то код. value хранит значения свойств.
})


// В курсе пропущен синтаксис классов, как и понятие "функция-конструктор".
// Очень важные темы! После курса изучите самостоятельно сначала функции-конструкторы, потом классы.
// В современном ООП используется именно синтаксис классов.

// синтаксис классов
class User {
    name;
    age;
    adress;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// функция-конструктор
function User(name, age) {
    this.name = name;
    this.age = age;
}