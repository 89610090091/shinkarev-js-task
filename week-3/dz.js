// 1
const car = {
    manufacturer: 'tesla',
    model: 'x',
    year: 2021,
    speed: 100,
    logInfo: function () {
        console.log('Производитель: ', this.manufacturer);
        console.log('Модель: ', this.model);
        console.log('Год: ', this.year);
        console.log('Средняя скорость: ', this.speed);
    },
    calcTime: function (distance) {
        console.log(distance / this.speed);
    }
}

// 2
const double = {
    numerator: 3,
    denominator: 2,
    sum: function (double) {
        if (this.denominator === double.denominator) {
            return {
                numerator: this.numerator + double.numerator,
                denominator: this.denominator,
            }
        } else {
            return {
                numerator: this.numerator * double.denominator + double.numerator * this.denominator,
                denominator: this.denominator * double.denominator,
            }
        }
    }
}


// 3
const clock = {
    hours: 5,
    minuts: 20,
    seconds: 45,
    logTime: function () {
        console.log(`${this.hours}:${this.minuts}:${this.seconds}`);
    },
    addSeconds: function (seconds) {
        this.seconds += seconds;
        while (this.seconds >= 60) {
            this.addMinuts(1);
            this.seconds -= 60;
        }

        while (this.minuts >= 60) {
            this.addHours(1);
            this.minuts -= 60;
        }
    },
    addMinuts: function (minuts) {
        this.minuts += minuts;
        while (this.minuts >= 60) {
            this.addHours(1);
            this.minuts -= 60;
        }
    },
    addHours: function (hours) {
        this.hours += hours;
    }
}