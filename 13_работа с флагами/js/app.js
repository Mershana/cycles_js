'use strict' //строгий режим

// Работа с флагами в JavaScript

// Задача 1
// Дан массив:

let arr = ['a', 'c', 'd', 'd', 'e'];
// Проверьте, что в этом массиве есть элемент 'c'. Если есть - выведите 'да', а если нет - выведите 'нет'.
let flag = false;
for (let elem of arr){
	if (elem === 'c'){
		flag = true;
		break;
	}
}

if(flag === true){
	console.log('есть'); // 'eсть'
} else {
	console.log('нет');
}