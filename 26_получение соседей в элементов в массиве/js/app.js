'use strict' //строгий режим

// Получение соседей элементов в массиве JavaScript

// Задача 1
// Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите следующий элемент массива.
// let arr = [2, 3, 5, 6, 8, 9];
// for (let i = 0; i < arr.length; i++){
// 	if(arr[i+1] != undefined){ 
// 	console.log(arr[i + 1]); //выводит следующий элемент массива 
// 	}
// }

// Задача 2
// Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла выводилась сумма текущего и следующего элемента массива.
// let arr = [2, 3, 5, 6, 8, 9];
// for (let i = 0; i < arr.length;i++){
// 	if(arr[i+1] != undefined){
// 		console.log(arr[i] + arr[i + 1])
// 	}
// }

// Задача 3
// Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите два предыдущих элемента массива.]
// let arr = [2, 3, 5, 6, 8, 9];
// for (let i = 0; i < arr.length; i++){
// 	if(arr[i-1] !== undefined && arr[i-2] !== undefined){
// 		console.log(arr[i - 1] + '-' + arr[i - 2]); // 3-2, 5-3, 6-5, 8-6;
// 	}
// }

// Задача 4
// Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла выводилась сумма двух предыдущих элементов и текущего элемента массива.
// let arr = [2, 3, 5, 6, 8, 9];
// for (let i = 0; i < arr.length; i++){
// 	if(arr[i-1] !== undefined && arr[i-2] !== undefined){
// 		console.log((arr[i - 1] + arr[i - 2]) + arr[i]); // 10, 14, 19, 23;
// 	}
// }

// Задача 5
// Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите сумму предыдущего, текущего и следующего элементов массива.
// let arr = [2, 3, 5, 6, 8, 9];
// for (let i = 0; i < arr.length; i++){
// 	if (arr[i-1] != undefined && arr[i+1] != undefined){ 
// 	console.log(arr[i-1] + arr[i] + arr[i+1]); // 10, 14, 19, 23;
// 	}
// }
//можно проще
// let arr = [2, 3, 5, 6, 8, 9];
// for(let i = 1; i < arr.length - 1; i++){ //- нулевой и последний элементы не берем, тк у них нет нужных соседей
// console.log(arr[i-1] + arr[i] + arr[i+1]); // 10, 14, 19 ,23;
// }