'use strict' //строгий режим

// Нахождение простых чисел на JavaScript

// Задача 1
// Самостоятельно, не подсматривая в мой код, повторите решение описанной задачи.
let num = 31;
let flag = true;
for (let i = 2; i < num; i++){
	if (num % i == 0){
		flag = false;
		break;
	}
}
console.log(flag) // true