"use strict"

// Крок 0. Позначення даних
// Крок 1. Введення даних:
// Крок 2. Обчислення
// Крок 3. виведення результату


// Задача 2. Створити функцію, яка за номером 
// дня дозволяє з'ясувати чи є цей день робочим.

if (confirm('Почати тестування?')) {


	function getDay(dayId) {
		let res
		switch (dayId) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: res = 'Робочий'
				break
			case 6:
			case 7: res = 'Вихідний'
				break
			default:
				throw new Error("Помилка");
		}
		return res
	}

	let dayNum = parseInt(prompt('Введіть номер дня тижня від 1 до 7'))

	document.write(`<h2> ${getDay(dayNum)} </h2> `)


}
