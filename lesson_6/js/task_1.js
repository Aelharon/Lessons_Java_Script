"use strict"

// Крок 0. Позначення даних
// Крок 1. Введення даних:
// Крок 2. Обчислення
// Крок 3. виведення результату


// Задача №1 Зобразити рівнобедрений трикутник із символів ^.
// Висоту задає користувач. Наприклад, на екрані висота =5.

if (confirm('Почати тестування?')) {

	const N = parseInt(prompt('Введіть висоту трикутника', '5'))
	let count = 1

	document.write('<div style="display: flex";><p style="text-align: center; font-weight:700;">')
	for (let i = 0; i < N; i++) {
		document.write('<br>')
		for (let j = 0; j < count; j++) {
			document.write('^')
		}
		count += 2
	}
	document.write('</p></div>')
}
