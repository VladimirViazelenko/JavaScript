// Exercise 1
let calculator = {
    read,
    sum,
    multi,
    diff,
    div
};

function read() {
    let x = prompt('Введите значение х');
    let y = prompt('Введите значение y');
    this.x = +x;
    this.y = +y;
};

function sum() {
    return this.x + this.y;
}

function multi() {
    return this.x * this.y;
}

function diff() {
    return this.x - this.y;
}

function div() {
    if (this.y === 0) {
        throw 'Невозможно делить на 0';
    }
    return this.x / this.y;
}

calculator.read();
alert(calculator.sum());
alert(calculator.multi());
alert(calculator.diff());
alert(calculator.div());

// Exercise 2
let coffeeMachine = {
    message: "Your coffee is ready!",
    start: function () {
        setTimeout(() => alert(this.message), 3000);
    }
}
coffeeMachine.start();

// Exercise 3
let counter = {
    count: 0,
    inc: function () {
        this.count++;
        return this;
    },
    dec: function () {
        this.count--;
        return this;
    },
    getValue: function () {
        this.count--;
        return this;
    }
}
let current = counter.inc().inc().dec().inc().dec().getValue();
alert(current);

// Exercise 4
let value = {
}
alert(me.getSum(1, 1));
alert(me.getDiv(1, 0));

// Exercise 5
var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};
function format(start, end) {
    console.log(start + this.name + end);
}
format.call(country, '', '');
format.apply(country, ['[', ']']);
format.call(country.capital, '', '');
format.apply(country.capital, ['', '']);
format.apply(country.capital.name, ['', '']);

// Exercise 6
let user = {
    name = "John"
};
function format(start, end) {
    console.log(start + this.name + end);
    return start + this.name + end;
};
bind(user);

console.log(format('<<<', '>>>'));
// Exercise 7
function concat(value, name) {
    return value + name;
}
let concatination = concat.bind(null, ' ', 'John');

function hello(greetings) {
    return greetings + concatination();
}
console.log(hello('Hello'));

// Exercise 8
function cube(x, 3) {
    let result = 1;
    for (let i = 0; i < 3; i++) {
        result *= x;
    }
    return result;
}
console.log(cube(2));

function cube(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * cube(x, n - 1);
    }
}
console.log(cube(2));

// Exercise 9
console.log(sum(1, 2, 3, 4, 5));