// Exercise 1
let first = 5;
let second = first * 3;
let three = first + second;
console.log(first);
console.log(second);
console.log(three);

// Exercise 2
let firstName = prompt('Enter your firstName', 'John');
let lastName = prompt('Enter your lastName', 'Bardon');
alert (`What's up ${firstName} ${lastName}`);

// Exercise 3
let x = prompt('Enter the first number');
let y = prompt('Enter the second number');
alert (x * y);
alert (x / y);
alert (x - y);
alert (+x + +y);

// Exercise 4
let time = prompt('Enter the number of working hours');
let day = prompt('Enter the number of working days per week');
let rate = prompt('Enter rate');
alert (time * day * rate);

// Exercise 5
let a = prompt('Enter value');
alert (a % 1 == 0);

// Exercise 6
let num = +prompt("Enter a number", '');
alert (isFinite(num));

// Exercise 7
let random = Math.random() * 100;
random = Math.floor(random);
let number = prompt('Enter the number');
alert(`${random} < ${number}`);

// Exercise 8
let str = prompt('Введите текст');
let str2 = prompt('Что вам нравится изучать?');
let str3 = 'Мне нравится изучать';
result = `${str3} ${str2}`;
alert (result);