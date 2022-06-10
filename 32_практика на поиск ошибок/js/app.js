'use strict' //строгий режим

// Поиск ошибок в коде с циклами JavaScript
// Задача 1
// Код должен вывести числа от 0 до 10:
// for (let i = 0; i >= 10; i++) {
// 	console.log(i);
// }
//решение
// for (let i = 0; i <= 10; i++) {
// 	console.log(i);
// }

// Задача 2
// Код должен вывести числа от 10 до 0:
// for (let i = 10; i >= 0; i++) {
// console.log(i);
// }
//решение
// for (let i = 10; i >= 0; i--) {
// 	console.log(i);
// }

/* Задача 3
Код должен вывести числа от 10 до 0:
for (let i = 10; i == 0; i--) {
	console.log(i);
} */
//решение
/* for (let i = 10; i >= 0; i--) {
	console.log(i);
} */

/* Задача 4
Код должен вывести числа от 0 до 10:
let i = 0;
while (i >= 10) {
	console.log(i);
	i++;
} */
//решение
// let i = 0;
// while (i <= 10) {
// 	console.log(i);
// 	i++;
// }

/* Задача 5
Код должен найти сумму целых чисел от 1 до 10
let res;
for (let i = 1; i <= 10; i++) {
	res += i;
}
console.log(res); */
//решение
// let res = 0;
// for (let i = 1; i <= 10; i++) {
// 	res += i;
// }
// console.log(res); //55

/* Задача 6
Код должен найти произведение целых чисел от 1 до 10:
let res = 0;
for (let i = 1; i <= 10; i++) {
	res *= i;
}
console.log(res); */
//Решение
/* let res = 1;
for (let i = 1; i <= 10; i++) {
	res *= i;
}
console.log(res); */ //3628800

/* Задача 7
Код должен найти сумму элементов массива:
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let elem of arr) {
	sum += elem;
}
console.log(sum); */ // должно вывести 15
//Решение
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let elem of arr) {
// 	sum += +elem;
// }
// console.log(sum); // должно вывести 15

/* Задача 8
Код должен найти сумму элементов массива:
let arr = ['1', '2', '3', '4', '5'];
let sum = '';
for (let elem of arr) {
	sum += +elem;
}
console.log(sum); */ // должно вывести 15
//Решение 1
/* let arr = ['1', '2', '3', '4', '5'];
let sum = '';
for (let elem of arr) {
 sum = +sum + +elem + '';
 
}
console.log(sum); */ //  15
//Решение 2
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let elem of arr) {
//  sum += +elem;
// }
// sum = '' + sum;
// console.log(sum); //'15'
//Решение 3
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let elem of arr) {
//  sum += +elem;
// }
// sum = sum.toString();
// console.log(sum); //'15'
//Решение 4 
// let arr = ['1', '2', '3', '4', '5'];
// let sum = '';
// let num = 0
// for (let elem of arr) {
//   num += Number(elem);
// }
// sum = String(num)
// console.log(sum); //15

/* Задача 9
Код должен найти сумму элементов массива:
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let elem of arr) {
	sum = +elem;
}
console.log(sum); */ // должно вывести 15
//Решение
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let elem of arr) {
// 	sum += +elem;
// }
// console.log(sum); // 15

/* Задача 10
Код должен найти сумму элементов массива, однако, всегда выводит NaN:
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let i = 0; i <= arr.length; i++) {
	sum += +arr[i];
}
console.log(sum); */ // почему-то выводит NaN
//Решение
/* let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let i = 0; i <= arr.length-1; i++) {
	sum += +arr[i];
}
console.log(sum); */ // 15

/* Задача 11
Код должен найти сумму элементов массива:
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let i = 0; i < arr.length - 1; i++) {
	sum += +arr[i];
}
console.log(sum); */ // почему-то выводит не 15
//Решение
/* let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
	sum += +arr[i];
}
console.log(sum); // 15 */

/* Задача 12
Код должен найти сумму элементов массива:
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
	sum += +i;
}
console.log(sum); */ // почему-то выводит не 15
//Решение
/* let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let i = 0; i <= arr.length; i++) {
	sum += +i;
}
console.log(sum); //  15 */

/* Задача 13
Код должен возвести в квадрат каждый элемент массива:
let arr = [1, 2, 3, 4, 5];
for (let elem of arr) {
	elem = elem ** 2;
}
console.log(arr); */
//Решение
// let arr = [1, 2, 3, 4, 5];
// let result = [];
// for (let elem of arr) {
// result.push(elem ** 2);
// }
// console.log(result); // [1, 4, 9, 16, 25]

/* Задача 14
Код должен заполнить массив числами от 1 до 5:
let arr;
for (let i = 1; i <= 5; i++) {
	arr.push(i);
}
console.log(arr); */
//Решение
/* let arr = []; //присвоить массив
for (let i = 1; i <= 5; i++) {
	arr.push(i);
}
console.log(arr); */ // [1, 2, 3, 4, 5]

/* Задача 15
Код должен найти сумму элементов объекта:
let obj = {a: 1, b: 2, c: 3};
let sum = 0;
for (let elem in obj) {
	sum += elem;
}
console.log(sum); */
//Решение
// let obj = {a: 1, b: 2, c: 3};
// let sum = 0;
// for (let elem in obj) {
// 	sum += obj[elem];
// }
// console.log(sum); // 6

/* Задача 16
Код должен найти сумму элементов объекта:
let obj = {a: 1, b: 2, c: 3};
let sum = 0;
for (let key in obj) {
	sum = +obj.key;
}
console.log(sum); */
//Решение
/* let obj = {a: 1, b: 2, c: 3};
let sum = 0;
for (let key in obj) {
	sum += obj[key];
}
console.log(sum); */ // 6

/* Задача 17
Код должен проверить, есть ли в массиве число 3 или нет:
let arr = [1, 2, 3, 4, 5];
let res = '';
for (let elem of arr) {
	if (elem === 3) {
		res = '+++';
	} else {
		res = '---';
	}
}
console.log(res); */
//Решение
/* let arr = [1, 2, 3, 4, 5];
let flag = false;
for (let elem of arr) {
	if (elem === 3) {
		flag = true;
		break;
	}
}
if (flag === true) {
	console.log('+++'); //++
} else {
	console.log('---');
} */

/* Задача 18
Код должен проверить, есть ли в массиве число 3 или нет:
let arr = [1, 2, 3, 4, 5];
let res = false;
for (let elem of arr) {
	if (elem === 3) {
		let res = true;
		break;
	}
}
console.log(res); */
//Решение
// let arr = [1, 2, 3, 4, 5];
// let res = false;
// for (let elem of arr) {
// 	if (elem === 3) {
// 		res = true;
// 		break;
// 	}
// }
// console.log(res); // true

/* Задача 19
Код должен вывести только четные элементы из массива:
let arr = [1, 2, 3, 4, 5];
for (let elem of arr) {
	if (elem % 2 = 0) {
		console.log(elem);
	}
}
 */
//Решение
/* let arr = [1, 2, 3, 4, 5];
for (let elem of arr) {
	if (elem % 2 == 0) {
		console.log(elem); // 2, 4
	}
}
 */