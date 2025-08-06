"use strict"

// Крок 0. Позначення даних
// Крок 1. Введення даних:
// Крок 2. Обчислення
// Крок 3. виведення результату


// Задача №8
// Вивести таблицю

if (confirm('Почати тестування?')) {

	let table = '<table>'
	for (let i = 1; i <= 1; i++) {
		table += '<tr>'
		for (let j = 1; j <= 3; j++) {
			table += `<th>${j}</th>`
		}
		table += '</tr>'
		table += '<tr>'
		for (let j = 4; j <= 6; j++) {
			table += `<th>${j}</th>`
		}
		table += '</tr>'
		table += '<tr>'
		for (let j = 7; j <= 9; j++) {
			table += `<th>${j}</th>`
		}
		table += '</tr>'
	}
	table += '</table>'

	document.write(table)




}
