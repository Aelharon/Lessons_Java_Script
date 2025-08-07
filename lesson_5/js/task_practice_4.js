"use strict"

// Крок 0. Позначення даних
// Крок 1. Введення даних:
// Крок 2. Обчислення
// Крок 3. виведення результату


// Задача №9
// Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком

if (confirm('Почати тестування?')) {

	let counter = 1
	for (let tableNum = 0; tableNum < 3; tableNum++) {
		document.write('<table>')
		for (let rows = 0; rows < 3; rows++) {
			document.write('<tr>')
			for (let columns = 0; columns < 3; columns++) {
				document.write(`<td>${counter++}</td>`)
			}
			document.write('</tr>')

		}
		document.write('</table>')
	}


}
