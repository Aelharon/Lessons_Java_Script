"use strict"

// Крок 0. Позначення даних
// Крок 1. Введення даних:
// Крок 2. Обчислення
// Крок 3. виведення результату


// Задача №8
// Вивести таблицю

// if (confirm('Почати тестування?')) {

let cellNum = 1
document.write('<table>')
for (let i = 1; i <= 3; i++) {
	document.write('<tr>')
	for (let j = 1; j <= 3; j++) {
		document.write(`<td>${cellNum++} </td>`)
	}
	document.write('</tr>')
}
document.write('</table>')





// }
