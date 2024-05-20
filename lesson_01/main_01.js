// 19/05/24
// I's starting to learn JS with Vadim
// Lesson 1

// window.alert('j');

let number = 1;
console.log(number);

// Creation of variable
let a;
console.log(a);

// Assigning values ​​to variables
a = 'Hello!';
console.log(a);

// Reassignment of variable values
a = 'Hi all!';
console.log(a);

// Creating a variable using the const instruction

// const b    Таким Образом const --- НЕ ОПРЕДЕЛЯЕТСЯ !!!!!!

const b = 'Vadim';      // СРАЗУ ЖЕ присваиваем З.
console.log(b);

// b = 'Alex';     // НЕ Переприсваивается (З.)
// console.log(b);
// Uncaught Type Error: Assignment to constant variable.
// Неперехоплена помилка типу: призначення постійній змінній.

// // // // //

// Definition of several variables at once (using let)
let myName, myAge, myAddress;

// it is impossible !!!!
// const person = myName1, myAge1,

myName = 'Luis';
myAge = 28;
myAddress = 'Kiev, pr.Drujbi';

console.log(myName, myAge, myAddress);

// // // // //

// You can do this in this way:

let myName1 = 'Jeka',
  myAge1 = 24,
  myAddress1 = 'Frankovsk, pr.Drujbi';

const person = 'Roman',
  person1 = 'Jeka',
  person2 = 'Pasha';

console.log(person, person1, person2);

const _myName = 'Undefined';
console.log(_myName);

// // // // //

let myFriendsName = null;
console.log(myFriendsName);

let myFriendsName1;
console.log(myFriendsName1);
