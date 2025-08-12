"use strict"

// Крок 0. Позначення даних
// Крок 1. Введення даних:
// Крок 2. Обчислення
// Крок 3. виведення результату


// While_DoWhile. Задача №2
// клавіатури вводяться числа поки не буде введено 0. 
// Знайти добуток чисел.

if (confirm('Почати тестування?')) {

	let productNum = 1
	let userNum

	do {
		userNum = parseInt(prompt('Введіть число'))
		if (userNum !== 0) {
			productNum *= userNum
		}
	} while (userNum !== 0);

	document.write(`добуток чисел = ${productNum} <br>`)

}
