"use strict"

// Крок 0. Позначення даних
// Крок 1. Введення даних:
// Крок 2. Обчислення
// Крок 3. виведення результату


// Задача 4. Дано масив елементів.
// Вивести на екран елементи, що більші за 100

if (confirm('Почати тестування?')) {

	const someArray = [25, 35, 150, 290, 615, 16, 6, 7, 104, 205, 14, 9]

	document.write(`Є масив ${someArray} <hr>`)

	document.write(`Елементи масиву більше 100: <br>`)

	for (const element of someArray) {
		if (element > 100) {
			document.write(`${element} <br>`)
		}
	}

}

