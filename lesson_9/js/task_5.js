"use strict"

// Крок 0. Позначення даних
// Крок 1. Введення даних:
// Крок 2. Обчислення
// Крок 3. виведення результату


// Задача 5. Дано масив елементів.
// Знайти добуток додатних елементів

if (confirm('Почати тестування?')) {

	const someArray = [5, 20, -12, -20, 8, 10, -7, 6, -3]

	document.write(`Є масив ${someArray} <hr>`)

	let product = 1
	for (const element of someArray) {
		if (element > 0) {
			product *= element
		}
	}
	document.write(`Добуток додатних елементів = ${product} <br>`)

}

