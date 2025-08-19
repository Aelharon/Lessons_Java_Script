"use strict"

// Крок 0. Позначення даних
// Крок 1. Введення даних:
// Крок 2. Обчислення
// Крок 3. виведення результату


// Задача 6. Дано масив елементів. 
// Усі елементи, які більші за перший елемент помножити на 2

if (confirm('Почати тестування?')) {

	const someArray = [5, 20, -12, -20, 8, 10, -7, 6, -3]

	document.write(`Є масив  ${someArray} <hr>`)
	document.write(`<p> Результат: </p>`)

	const firstElement = someArray[0]
	for (const element of someArray) {
		if (firstElement < element) {
			let productElement = element * 2
			document.write(`${productElement}<br>`)
		}
	}


}

