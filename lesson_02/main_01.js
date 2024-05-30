// 21/05/24
// Начинаю учить 2ой Ур. с Вадимом
// I's starting to learn  JS with Vadim

// 23/05/24

// 30/05/24
// c 19-й минуты

////// //////

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
console.log(number4); // 1

console.log(2 ** 2); // 4
console.log(2 ** 3); // 8   2*2*2
console.log(2 ** 4); // 16   2*2*2*2

// 23/05/24

// Конкотенация строк

// const word1 = 'Hi'

// Через , (ЗАПЯТУЮ)
console.log('Hi', 'All', 'My', 'Friends'); // Hi All My Friends

// Через + (знак ПЛЮС)
console.log('Hi' + 'All' + 'My' + 'Friends'); // HiAllMyFriends

// Ещё Два -- Необычных - Оп.-а --
// Сложения и Вычитания
// с Присваиванием

let number10 = 0;
console.log(number10); // 0

number10 += 5;
console.log(number10); // 5

number10 += -10;
console.log(number10); // -5

number10 -= 10;
console.log(number10); // -15

number10 = number10 - 3;
console.log(number10); // -18

number10 = number10 + 25;
console.log(number10); // 7

////
// Ещё Два -- Необычных - Оп.-а --
// Умножения и Деления
// с Присваиванием

let number11 = 10;
console.log(number11); // 10

number11 *= 5;
console.log(number11); // 50

number11 /= 2;
console.log(number11); // 25

////

// Оп.-ы Инкремента и Декремента

let numberPlusPlus = 1;

numberPlusPlus++;
numberPlusPlus++;

console.log(numberPlusPlus); //3

let numberMinusMinus = 10;

numberMinusMinus--;
numberMinusMinus--;

console.log(numberMinusMinus);  // 8

//

++numberPlusPlus;
++numberPlusPlus;

console.log(numberPlusPlus);   // 5

//

--numberMinusMinus;
--numberMinusMinus;

console.log(numberMinusMinus);    // 6

//
// Разница - между - Префиксным и Постфиксным Оп.-ми

let numberPlusPlus1 = 100;

console.log (++numberPlusPlus1)   // 101
console.log (numberPlusPlus1++)   // 101
console.log (numberPlusPlus1)   // 102