"use strict"

// Крок 0. Позначення даних
// Крок 1. Введення даних:
// Крок 2. Обчислення
// Крок 3. виведення результату


// Задача №6
// Створити функцію, яка створює таблицю з вказаною кількістю рядків 
// і стовпців (таблиця заповнюється заданим фіксованим повідомленням).

if (confirm('Почати тестування?')) {


	function table(num1, num2) {
		document.write(`<table>`)
		for (let i = 0; i < num1; i++) {
			document.write(`<tr>`)
			for (let j = 0; j < num2; j++) {
				document.write(`<td>Yo</td>`)
			}
			document.write(`</tr>`)
		}
		document.write(`</table>`)
	}

	const number1 = parseInt(prompt('введіть кількість рядків', '5'))
	const number2 = parseInt(prompt('введіть кількість стовпців', '5'))

	table(number1, number2)


}
