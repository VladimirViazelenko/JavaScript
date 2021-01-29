// Операторы

// Exercise 1
let x = prompt('Enter the number');
if (x > 0) {
    alert ("Положительное число");
} else if (x < 0) {
    alert ("Отрицательное число");
} else if (x == 0) {
    alert ("Ноль");
}
// Exercise 2 
let x = prompt('Enter the value x');
let y = prompt('Enter the value y');
let z = (+x + +y);
if (z >= 500) {
    alert ('Вы едете на Майорку');
} else if (z < 500) {
    alert ('Вы идёте пить пиво');
}
// Exercise 3
let age = 25;
if (age >= 20 && age < 27) {
    alert ('Выслать повестку');
}
// Exercise 4
let с = prompt('Enter the number');
if (с == 7 || с == 225 || с == 255) {
    alert ('Вы едете домой');
} else {
    alert ('Ожидайте');
}
// Exercise 5 
let date = new Date();
let weekday = date.getDay();
if (!(weekday == 6 || weekday == 7)) {
    alert('Вы идёте на работу');
} else {
    alert('Выходной');
}
// Exercise 6
let x = prompt('Enter the number x');
let y = prompt('Enter the number y');
if (x <= 1 && y >= 3 || y < 0) {
    alert (+x + +y);
} else {
    alert ("Не верно");
}

// Exercise 7
let x = prompt('Enter the number x');
let y = prompt('Enter the number y');
if (x > 2 && x < 11 || y >=6 && y < 14) {
    alert (x * 2);
}
else {
    alert (x + 5);
}
// Exercise 8 
let name = prompt('Enter your name');
    alert (`Hello ${name} `);
if (name == '' || name == null) {
    confirm( 'Вы уверены, что хотите выйти ?' );
    alert('Отменено');
}
// Exercise 9 
let greeting = '';
let lang = prompt('Enter the lang: ru, en or de');
if (lang = 'ru'){
    alert(greeting = 'Здравствуйте');
} else if (lang = 'en'){
    alert(greeting = 'Hello');
} else if (lang = 'de'){
    alert(greeting = 'Guten Tag');
} else {
    alert('Good bay');
}
// Exercise 10 
let month = new Date();
if (month == 12 || month == 1 || month == 2) {
    alert('Winter');
} else if (month == 3 || month == 4 || month == 5) {
    alert('Spring');
} else if (month == 6 || month == 7 || month == 8) {
    alert('Summer');
} else if (month == 9 || month == 10 || month == 11) {
    alert('Autumn');  
}
console.log(month);

// Exercise 11
let lang = prompt('Enter the lang: ru, en');
let day = prompt('Enter a value between 0 and 6');
switch(day) {
    case 0: return "ВС";
    case 1: return "ПН";
    case 2: return "ВТ";
    case 3: return "СР";
    case 4: return "ЧТ";
    case 5: return "ПТ";
    case 6: return "СБ";
}
// Exercise 12
let firstName = prompt('Enter your name');
let age = prompt('Enter your age');
switch (firstName && age) {
    case 'John':
    case 29 :
        alert (`Привет ${firstName} ${age}`);
        break;
    case 'Kate':
    case 15 :
        alert (`Привет ${firstName} ${age}`);
        break;
    default:
        alert('Пока');
}
// Циклы

// Exercise 1
let str = '.#';
for (let i = 0; i < 10; i++) {
	str = str + '.#';
}
console.log(str); 

// Exercise 2
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
  }

// Exercise 3 +
let username = prompt('Enter username');
console.log
// Exercise 4 

// Exercise 5
let x = prompt('Enter value');
for (let i = 1; i == x; i++) {
    if (i % 1 == 0) {
      alert( i );
    }
  }

// Exercise 6
let random = Math.random();
while (true) {
  if (Math.random() > 0.9) break;
}
alert (random);
// Exercise 7 

// Exercise 8
function fib(n) {
    let a = 1,
      b = 1;
    for (var i = 3; i <= n; i++) {
      let temp = a + b;
      a = b;
      b = temp;
    }
    return b;}
// Exercise 9
let sum = 0;
while (true) {
  let value = +prompt("Введите число", '');
  if (!value) break; 
  sum += value;
}
alert( 'Сумма: ' + sum );

// Exercise 10
let password = prompt('Введите пароль', '');
  if (password == 'Вова') {
    alert( 'Вы успешно авторизованы' );
  } else if (password == '' || password == null) {
    confirm( 'Вы уверены, что хотите отменить авторизацию?' );
    alert('Вы успешно отменили авторизацию');
  } 

// Exercise 11
for (let i = 1; i <= 50; i++) {
    if(i % 3 === 0){
        alert('Fizz');
    } else if(i % 5 === 0){
        alert('Buzz');
    } else if (i % 3 === 0 && i % 5 === 0){
        alert('FizzBuzz')
    } else {
        alert(i)
    }
  }
}