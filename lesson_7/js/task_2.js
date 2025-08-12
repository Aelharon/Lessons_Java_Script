"use strict"

// Крок 0. Позначення даних
// Крок 1. Введення даних:
// Крок 2. Обчислення
// Крок 3. виведення результату


// Задача 1. Створити функцію, 
// яка за номером місяця повертає його назву.

if (confirm('Почати тестування?')) {


	function getSeason(monthId) {
		let res
		switch (monthId) {
			case 1: res = 'Січень'
				break
			case 2: res = 'Лютий'
				break
			case 3: res = 'Березень'
				break
			case 4: res = 'Квітень'
				break
			case 5: res = 'Травень'
				break
			case 6: res = 'Червень'
				break
			case 7: res = 'Липень'
				break
			case 8: res = 'Серпень'
				break
			case 9: res = 'Вересень'
				break
			case 10: res = 'Жовтень'
				break
			case 11: res = 'Листопад'
				break
			case 12: res = 'Грудень'
				break
			default:
				throw new Error("Помилка");
		}
		return res
	}

	let monthNum = parseInt(prompt('Введіть номер місяця від 1 до 12'))

	document.write(`<h2> ${getSeason(monthNum)} </h2> `)


}
