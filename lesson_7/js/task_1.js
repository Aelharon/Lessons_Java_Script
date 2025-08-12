"use strict"

// Крок 0. Позначення даних
// Крок 1. Введення даних:
// Крок 2. Обчислення
// Крок 3. виведення результату


// Задача 0. Створити функцію, яка за номером місяця
// повертає пору року, до якої відноситься цей місяць.

if (confirm('Почати тестування?')) {


	function getSeason(monthId) {
		let res
		switch (monthId) {
			case 12:
			case 1:
			case 2:
				res = 'Зима'
				break
			case 3:
			case 4:
			case 5:
				res = 'Весна'
				break
			case 6:
			case 7:
			case 8:
				res = 'Літо'
				break
			case 9:
			case 10:
			case 11:
				res = 'Осінь'
				break
			default:
				throw new Error("Помилка");
		}
		return res
	}

	let monthNum = parseInt(prompt('Введіть номер місяця від 1 до 12'))

	document.write(`<h2> ${getSeason(monthNum)} </h2> `)


}
