"use strict"

// Крок 0. Позначення даних
// Крок 1. Введення даних:
// Крок 2. Обчислення
// Крок 3. виведення результату


// Задача 3. Створити окремі функції, які для 4 чисел знаходять:
// 1)суму;
// 2)добуток;
// 3)середнє арифметичне;
// 4)мінімальне значення. 


if (confirm('Почати тестування?')) {


	let sum = function (num1, num2) {
		return num1 + num2
	}

	const getProduct = (num1, num2) => num1 * num2

	function getArithmeticMean(num1, num2) {
		return (num1 + num2) / 2
	}

	function getMin(num1, num2) {
		return num1 < num2 ? num1 : num2
	}

	const number1 = parseInt(prompt('Введіть number1'))
	const number2 = parseInt(prompt('Введіть number2'))


	document.write(`
Перше число ${number1}, друге число ${number2} <br>
	Сума чисел = ${sum(number1, number2)} <br>
	Добуток = ${getProduct(number1, number2)} <br>
	Середнє арифметичне = ${getArithmeticMean(number1, number2)} <br>
	Мінімальне значення = ${getMin(number1, number2)} <br>
	`)

}
