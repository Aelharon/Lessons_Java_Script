"use strict"

// Крок 0. Позначення даних
// Крок 1. Введення даних:
// Крок 2. Обчислення
// Крок 3. виведення результату


// While_DoWhile. Задача №3
// З клавіатури поступово вводяться числа. 
// Знайти суму перших N парних чисел.

if (confirm('Почати тестування?')) {

	let evenNum = 0
	let sumNum = 0
	const N = parseInt(prompt('Введіть кількість парних чисел'))

	do {
		let userNum = parseInt(prompt('Введіть число'))
		if ((userNum % 2) === 0) {
			++evenNum
			sumNum += userNum
		}
	} while (evenNum < N);


	document.write(`Сума парних чисел = ${sumNum} <br>`)
}
