"use strict"

// Крок 0. Позначення даних
// Крок 1. Введення даних:
// Крок 2. Обчислення
// Крок 3. виведення результату


// Задача №7
// Вивести таблицю з 3 рядків і 7 стовпців

if (confirm('Почати тестування?')) {

	document.write('<table>')
	for (let row = 1; row <= 3; row++) {
		document.write('<tr>')
		for (let cell = 1; cell <= 7; cell++) {
			document.write(`<td>${cell}</td>`)
		}
		document.write('</tr>')
	}
	document.write('</table>')

}
