"use strict"

// Крок 0. Позначення даних
// Крок 1. Введення даних:
// Крок 2. Обчислення
// Крок 3. виведення результату


// While_DoWhile. Задача №1
// З клавіатури вводяться числа поки не буде введено 0. Знайти суму чисел.

if (confirm('Почати тестування?')) {

	let sumNum = 0
	let userNum

	do {
		userNum = parseInt(prompt('Введіть число'))
		sumNum += userNum
	} while (userNum !== 0);

	document.write(`Сума чисел = ${sumNum} <br>`)

}
