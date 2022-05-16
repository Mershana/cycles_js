'use strict' //строгий режим

// Перебор объекта циклом for-in в JavaScript

// Он имеет следующий синтаксис:
// for (let переменнаяДляКлюча in объект) {
// }

// Задача 1
// Дан объект следующий объект:
// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// С помощью цикла for-in найдите сумму элементов этого объекта.
// let sum = 0;
// for (let key in obj){
// 	sum += obj[key]
// }
// console.log(sum) // 15

//Задача 2
// let obj = {a: 12, b: 232, c: 31, d: 49, e: 5, f: 5, g: 2};
// let result = 0;
// for (let key in obj){
// 	result += obj[key]
// }
// console.log(result) // 336

//Задача 3 
let obj = {a: 22, b: 123, c:214, d:45, e:53};
let summa = 0;
for (let key in obj){
	summa += obj[key]
}
console.log(summa); // 457