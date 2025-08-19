"use strict"

// Крок 0. Позначення даних
// Крок 1. Введення даних:
// Крок 2. Обчислення
// Крок 3. виведення результату


// Задача 2. Користувач вводить кількість елементів. 
// Створити масив, у якому перша половина заповнена 1-цями, 
// а друга заповнена 7-ками.

if (confirm('Почати тестування?')) {


	const userNumber = parseInt(prompt('Ведіть кількість елементів масиву', '10'))
	const firstHalfArray = Math.ceil(userNumber / 2)

	let userArray = new Array(userNumber).fill(1, 0, firstHalfArray).fill(7, firstHalfArray)

	document.write(`Масив - ${userArray} <br>`)

}

