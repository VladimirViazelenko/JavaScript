// Exercise 1
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log( max(0, -1) ); 
// Exercise 2
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
console.log( min(0, -1, 100, 500, 100500) );
// Exercise 3
let users = [
    { id: 1, firstname: "Viktor", lastname: "Petrov" , age: 23 },
    { id: 2, firstname: "Irina", lastname: "Ivanova" , age: 15 },
    { id: 3, firstname: "Alex", lastname: "Shevchenko" , age: 28 },
    { id: 4, firstname: "Vladimir", lastname: "Nikonov" , age: 43 },
    { id: 5, firstname: "Vladislav", lastname: "Sokolov" , age: 33 },
    { id: 6, firstname: "Marina", lastname: "Popova" , age: 13 },
    { id: 7, firstname: "Nikita", lastname: "Fedorov" , age: 16 },
    { id: 8, firstname: "Valentin", lastname: "Smirnov" , age: 17 },
    { id: 9, firstname: "Robert", lastname: "Volkov" , age: 18 },
    { id: 10, firstname: "Feliks", lastname: "Alekseev" , age: 26 },
];
let filterUsers = users.filter((item) => item.age < 18)
console.log(filterUsers);
let updUsers = users.map((item) => item.firstname + " " + item.lastname);
console.log(updUsers);

// Exercise 4 

let arr = [35, 96, 23, 54, 32, 21];
let deleteFirst = (array) => {
    array.splice(0, 1);
};
deleteFirst(arr);
console.log(arr);

// Exercise 5
let arr = [98, 23, 32, 56, 76, 87];
let addNumbers = function (arg, ...rest) {
    for(let i = 0; i < rest.length; i++) {
        arg[arg.length] = rest[i];
    }
    console.log(arr);
};
addNumbers(arr, 153);

// Exercise 6
let source = { firstname: 'John', age: 30 };

function sourseAssign {
for (let i = 1; i < arguments.length; i++) {
    let sourseAssign = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
    console.log(sourseAssign); 
  }
}
// Exercise 7
function setComment (date, message, author = 'Anonymous') {
    if (date == undefined || message == undefined) {
        return alert('данные переданы некорректно');
}
console.log(author + ", " + date );
console.log(message);
};
setComment('2016-11-02', 'Everything is ok', 'John');
setComment('2016-11-02', 'You could do it better!');

// Exercise 8 
function createTimer() {
    let time = performance.now() ;

    return function() {
        return ++time;
    }
}

let timer = createTimer();
alert('!')  // код, время выполнения которого нужно измерить
alert( timer() ); // время в мкс от начала выполнения createTimer() до момента вызова timer()

// Exercise 9
function createAdder() {

return function(name) {
    return hello + name; 
     }
}
let hello = createAdder('Hello, ');
alert( hello('John') );
alert( hello('Harry') );

let plus = createAdder(5);
alert( plus(1) );
alert( plus(5) );

