"use strict"

// Крок 0. Позначення даних
// Крок 1. Введення даних:
// Крок 2. Обчислення
// Крок 3. виведення результату


// Задача №1 Поступово генерувати 100 випадкових чисел від 1 до 1000. 
// Підрахувати яких чисел більше: парних чи непарних.

if (confirm('Почати тестування?')) {

	let pairedNum = 0
	let unpairedNum = 0

	for (let i = 0; i < 100; i++) {
		let randomNum = 1 + Math.floor(Math.random() * (1000))
		let valueNum = Math.floor(randomNum % 2)
		if (valueNum) {
			unpairedNum += 1
		}
		else
			pairedNum += 1
	}
	document.write(`<p> Парних чисел ${pairedNum}</p>
						<p>Непарних чисел ${unpairedNum}</p>`)

}
