"use strict"

// Крок 0. Позначення даних
// Крок 1. Введення даних:
// Крок 2. Обчислення
// Крок 3. виведення результату


// Задача 1. Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
// ●	номери днів, протягом яких кількість відвідувачів була меншою за 20;
// ●	номери днів, коли кількість відвідувачів була мінімальною;
// ●	номери днів, коли кількість відвідувачів була максимальною;
// ●	загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.


if (confirm('Почати тестування?')) {

	function getResult(day, ...numbers) {
		let min20 = ''
		for (let i = 0; i < day; i++) {
			if (numbers[i] < 20)
				min20 += `${i + 1},`
		}

		let startDay = numbers[0]

		let minDay
		for (let j = 0; j < day; j++) {
			if (startDay > numbers[j]) {
				startDay = numbers[j]
				minDay = j + 1
			}
		}

		let maxDay
		for (let l = 0; l < day; l++) {
			if (startDay < numbers[l]) {
				startDay = numbers[l]
				maxDay = l + 1
			}
		}

		let sumClientWorkDay = 0
		for (let k = 0; k < 5; k++) {
			sumClientWorkDay += numbers[k]
		}
		let sumClientWeekDay = 0
		for (let m = 5; m < 7; m++) {
			sumClientWeekDay += numbers[m]
		}

		return (`Дні в які кількість відвідувачів менша за 20 - ${min20} <br>
Дні коли кількість відвідувачів була мінімальною - ${minDay} <br>
Дні коли кількість відвідувачів була максимальною - ${maxDay} <br>
Кількість клієнтів у робочі дні - ${sumClientWorkDay} <br>
Кількість днів на вихідних - ${sumClientWeekDay} <br> `)
	}

	const result = getResult(7, 17, 20, 45, 35, 15, 12, 23)

	document.write(result)

}