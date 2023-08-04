// 1
class Marker {
    color;
    value;
    buffer = [];

    constructor(color) {
        this.color = color;
        this.value = 100;

    }

    addToBuffer(text) {
        const symbols = text.split('');
        this.buffer = this.buffer.concat(symbols);
    }

    print() {
        const span = document.createElement('span');
        span.style.color = this.color;

        while (this.value > 0 && this.buffer.length > 0) {
            const symbol = this.buffer.shift();
            span.innerText += symbol;
            if (symbol !== ' ') {
                this.value -= 0.5;
            }
        }

        document.body.append(span);
    }

    charge(value) {
        this.value += value;
        if (this.value > 100) {
            this.value = 100
        }
    }
}

// const marker = new Marker('red');

// 2
class CustomDate extends Date {
    log() {
        this.toLocaleDateString();
    }

    check() {
        if (Date.now() > this) {
            console.log('дата из пролого');
        } else if (Date.now() < this) {
            console.log('дата из будущеюго');
        } else {
            console.log('даты равны');
        }
    }

    isLeap() {
        return this.getFullYear() % 4 === 0;
    }

    getNextDate() {
        const nextDate = new Date();
        nextDate.setFullYear(this.getFullYear());
        nextDate.setMonth(this.getMonth());
        nextDate.setDate(this.getDate() + 1);
        return nextDate;
    }
}

// const today = new CustomDate('December 17, 1995 03:24:00');

// 3
class Employee {
    name;
    position;

    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
}

const employees = [
    new Employee('Василий', 'старший разработчик'),
    new Employee('Пётр', 'младший разработчик'),
];

class EmpTable {
    employees;

    constructor(employees) {
        this.employees = employees;
    }

    getHtml() {
        const table = document.createElement('table');

        this.employees.forEach((employee) => {
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            const positionCell = document.createElement('td');
            table.append(row);
            row.append(nameCell, positionCell);
            nameCell.innerText = employee.name;
            positionCell.innerText = employee.position;
        });

        document.body.append(table)
    }
}

const empTable = new EmpTable(employees);


class StyledEmpTable extends EmpTable {
    styles;

    constructor(styles, employees) {
        super(employees)
        this.styles = styles;
    }

    getHtml() {
        const table = document.createElement('table');
        this.styles.forEach((style) => {
            table.style[style[0]] = style[1];
        });

        this.employees.forEach((employee) => {
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            const positionCell = document.createElement('td');
            table.append(row);
            row.append(nameCell, positionCell);
            nameCell.innerText = employee.name;
            positionCell.innerText = employee.position;
        });

        document.body.append(table)

        table.addEventListener('click', foo);

        function foo(event) {
            event.target.style.background = 'red';
            table.removeEventListener('click', foo);
        }
    }
}

function foo() {
    console.log('hello');
}

const styles = [
    ['border', '5px solid blue']
]

const styledEmpTable = new StyledEmpTable(styles, employees)