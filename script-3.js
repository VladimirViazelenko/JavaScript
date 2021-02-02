// Exercise 1
let array = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];
let sum = 0;
for (let key of array) {
    if (typeof key == 'array' || isNaN(key)) {
    sum += array(key);
    }
}
alert(sum);
// Exercise 2
let array = [];
for (let i = 0; i < 10; i++) {
    array[i] = (Math.floor(Math.random() * 1000) / 100) ** 5;
    console.log(array[i]);
}
// Exercise 3
let array = ['AngularJS', 'jQuery']
array.unshift('Backbone.js');
array.push('ReactJS', 'Vue.js');
arr.splice(1, 0, 'CommonJS');
for (let i = 0; i < array.length; i++) {
    if (array[i] == 'jQuery') {
        alert ('Это здесь лишнее');
        array.splice (i, 1);
    }
}
console.log(array);
// Exercise 4 !
let str = 'Как однажды Жак звонарь сломал фонарь головой';
let arr = ' ';
str = str.split(arr);
str.splice(1, 1);
str.splice(3, 0, 'однажды');
str.splice(5, 1);
str.push('фонарь');
alert(str.join(' '));
// Exercise 5
let person = {
    name: 'Andrey', age: 23, gender: 'm' ,
};
let city = prompt('Enter your city');
alert( city in person );


// Exercise 6
let phone = {
    brand: prompt('Бренд'),
    model: prompt('Модель телефона'),
    resolution: prompt('Разрешение'),
    color: prompt('Цвет'),
};
Object.assign(person,phone);
alert(Object.entries(person));

// Exercise 7
let dates = {
    firstDate: new Date(),
    secondDate: new Date(new Date().setDate(new Date().getDate() - 365)),
};
let user = new Date(prompt());
if (user > dates.secondDate && user < dates.firstDate) {
    alert('Попадает в диапазон дат');
}
// Exercise 8 !
let arr = [];
for (let i  = 0; i < 10; i++) {
    arr.push(prompt());
}
arr = arr.filter(Number);
let sum = 0;
for (let x = 0; x < arr.length; x++) {
sum += +arr[x];
}
alert(sum);
// Exercise 9
let x = 0;
let arr = [];
for (let i  = 1; i <= 10; i++) {
    arr.push([]);
    for(let j = 1; j <= 10; j++){
        arr[i - 1].push(i + 'x' + j + '=' + (i * j))
    }
}
console.log(arr);
// Exercise 10
let html = {
    img: { 
        src: "https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        alt: "" ,
        style: {
            border: "1px solid #ccc" ,
            width: "200",
        },
    }
}
