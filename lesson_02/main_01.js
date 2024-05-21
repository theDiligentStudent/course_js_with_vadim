// 21/05/24
// Начинаю учить 2ой Ур. с Вадимом
// I's starting to learn  JS with Vadim

const number0 = 100;
console.log(typeof number0);

const string0 = 'my name';
console.log(typeof string0);

const bool = true;
console.log(typeof bool);

const error = 5 / 'hi';
console.log(error);

const backQuotes = 'Friends!';
console.log(`hello, ${backQuotes}`); // hello, Friends!

console.log(`Hello
    everyone     ,   
          friends      !`);

// МАТЕМАТИЧЕСКИЕ Оп.-ы

// const number0 = 1000
// main_01.js:27 Uncaught SyntaxError: Identifier 'number0' has already been declared

let number1 = 1000;
number1 = -1000;
console.log(number1);

// Остаток от Ч.-а
const number2 = 5;
const number3 = 2;
const number4 = number2 % number3;
console.log(number4) // 1

console.log(2**2) // 4   
console.log(2**3) // 8   2*2*2
console.log(2**4) // 16   2*2*2*2
