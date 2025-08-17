"use strict"

// Крок 0. Позначення даних
// Крок 1. Введення даних:
// Крок 2. Обчислення
// Крок 3. виведення результату


// Задача №4
// Створити функцію, яка для 3 заданих чисел знаходить
// одночасно декілька результатів: кількість парних,
// кількість додатних, кількість більших за 100.

if (confirm('Почати тестування?')) {



	function getRes(num1, num2, num3) {
		let even = 0
		let positive = 0
		let num100 = 0
		if (num1 % 2 === 0) ++even
		if (num2 % 2 === 0) ++even
		if (num3 % 2 === 0) ++even
		if (num1 > 0) ++positive
		if (num2 > 0) ++positive
		if (num3 > 0) ++positive
		if (num1 > 100) ++num100
		if (num2 > 100) ++num100
		if (num3 > 100) ++num100
		return `Кількість парних = ${even} <br> 
			Кількість додатних = ${positive} <br> 
			Кількість більших за 100 = ${num100}`
	}

	const number1 = parseInt(prompt('Введіть перше число', '102'))
	const number2 = parseInt(prompt('Введіть друге число', '61'))
	const number3 = parseInt(prompt('Введіть третє число', '-20'))

	getRes(number1, number2, number3)

	document.write(`
	Перше число = ${number1} <br>
	Друге число = ${number2} <br>
	Третє число = ${number3} <br>
	<br>
	${getRes(number1, number2, number3)} <br>
`)


}
