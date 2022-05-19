'use strict' //строгий режим
// Заполнение массивов через цикл в JavaScript

/* Пусть у нас есть какой-то массив:

let arr = [];
Давайте заполним этот массив какими-нибудь элементами. Можно сделать это вот так:

let arr = [1, 2, 3, 4, 5];
А можно изначально создать массив пустым, а затем добавить в него данные вот так:

let arr = [];

arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5; */

// Задача 1
// Объявите пустой массив, а затем заполните его числами от 1 до 10.
// let arr = [];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// arr[3] = 4;
// arr[4] = 5;
// arr[5] = 6;
// arr[6] = 7;
// arr[7] = 8;
// arr[8] = 9;
// arr[9] = 10;

// console.log(arr)

// Задача 2
// Объявите пустой массив, а затем заполните его 5-ю буквами x.
// let arr = [];
// arr[0] = 'x'
// arr[1] = 'x'
// arr[2] = 'x'
// arr[3] = 'x'
// arr[4] = 'x'
// console.log(arr) 

// Заполнение массива в цикле

// Задача 3
// С помощью цикла заполните массив числами от 1 до 100.
// let arr = [];
// for (let i = 0; i <= 99; i++){
// 	arr[i] = i + 1;
// }
// console.log(arr)

// Проблема пропусков
// Заполнение значениями не по порядку

// Задача 4
// С помощью цикла заполните массив нечетными числами в промежутке от 1 до 99.
// let arr = [];
// for(let i = 1, j = 0; i <= 99; i += 2, j++){
// 	arr[j] = i;
// }
// console.log(arr) // массив выведет нечетные числа

// Задача 5
// С помощью цикла заполните массив нечетными числами в промежутке от 5 до 67.
// let arr = [];
// for (let i = 5, j = 0; i <= 67; i += 2, j++){
// 	arr[j] = i;
// }
// console.log(arr)

// Задача 6
// С помощью цикла заполните массив четными числами в промежутке от 2 до 60.
// let arr = [];
// for (let i = 2, j = 0; i <= 60; i += 2, j ++){
// 	arr[j] = i;
// }
// console.log(arr)
