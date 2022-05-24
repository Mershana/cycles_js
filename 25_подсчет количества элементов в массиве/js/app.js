'use strict' //строгий режим

// Подсчет количества элементов в массиве JavaScript

// Задача 1
// Дан следующий массив:
// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// Подсчитайте количество цифр 3 в этом массиве.
// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let counter = 0;
// for (let elem of arr){
// 	if (elem === 3){
// 		counter++;
// 	}
// }
// console.log(counter) // 4

// Задача 2
// Дан следующий массив:
// let arr = [1, 2, 1, 3, 2, 3, 2, 6, 3, 2, 1];
// Подсчитайте количество цифр 2 в этом массиве.
// let arr = [1, 2, 1, 3, 2, 3, 2, 6, 3, 2, 2];
// let counter = 0;
// for (let elem of arr){
// 	if (elem === 2){
// 		counter++;
// 	}
// }
// console.log(counter); // 5

// Задача 3
// Модифицируйте предыдущую задачу так, чтобы в одном цикле одновременно подсчитывалось и количество троек, и количество двоек.
// let arr = [1, 2, 1, 3, 2, 3, 2, 6, 3, 2, 2];
// let counter = 0;
// let counter_three = 0;
// for (let elem of arr){
// 	if (elem === 3){
// 		counter_three++;
// 	}
// 	if (elem === 2){
// 		counter++
// 	}
// }
// console.log(counter_three); //3
// console.log(counter); // 5

// Задача 4
// Модифицируйте предыдущую задачу так, чтобы в одном цикле одновременно подсчитывалось и  количество шестерок ,количество троек, и количество двоек.
// let arr = [1, 2, 1, 3, 2, 3, 2, 6, 3, 2, 2];
// let counter_two = 0;
// let counter_three = 0;
// let counter_six = 0;
// for (let elem of arr){
// 	if(elem === 6){
// 		counter_six++;
// 	}
// 	if (elem === 3){
// 		counter_three++;
// 	}
// 	if (elem === 2){
// 		counter_two++
// 	}
// }
// console.log(counter_six); //1
// console.log(counter_three); //3
// console.log(counter_two); //5

// Результат в виде объекта

// Задача 3
// Дана строка. Подсчитайте сколько раз в ней встречается каждый из ее символов.
// let arr = ['x', 'y', 'g', 'y', 'g', 'y'];
// let count = {};
// for (let elem of arr){
// 	if (count[elem] == undefined){
// 		count[elem] = 1;
// 	} else {
// 		count[elem]++;
// 	}
// }
// console.log(count) // {x: 1, y: 3, g: 2}

