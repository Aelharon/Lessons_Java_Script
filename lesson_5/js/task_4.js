"use strict"

// Крок 0. Позначення даних
// Крок 1. Введення даних:
// Крок 2. Обчислення
// Крок 3. виведення результату


// Задача №4
// Вивести з використанням циклів маркований список з випадковими 
// числами(1 - 100).Кількість випадкових чисел вводиться користувачем.

if (confirm('Почати тестування?')) {


	const userNum = parseInt(prompt('введіть кількість чисел', '3'))

	document.write('<ul>')
	for (let i = 1; i <= userNum; i++) {
		let randomNum = 1 + Math.floor(Math.random() * 100)
		document.write(`
		<li>
${randomNum}
		</li>`)
	}
	document.write('</ul>')

}
