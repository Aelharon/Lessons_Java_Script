"use strict"

// Крок 0. Позначення даних
// Крок 1. Введення даних:
// Крок 2. Обчислення
// Крок 3. виведення результату


// Задача 5. Дано послідовність оцінок учня. Підрахувати кількість:
// 1)	двійок
// 2)	кількість хороших оцінок (добре, відмінно);
// 3)	кількість оцінок, які нижче середнього

if (confirm('Почати тестування?')) {

	function getSumEstimates(...estimates) {
		let sumNumberTwos = 0
		let sumGoodEstimates = 0
		let sumBelowAverage = 0
		let sumBall = 0
		for (let k = 0; k < estimates.length; k++) {
			sumBall += estimates[k]
		}
		const averageBall = sumBall / estimates.length

		for (let i = 0; i < estimates.length; i++) {
			if (estimates[i] === 2) {
				sumNumberTwos++
			}
		}
		for (let j = 0; j < estimates.length; j++) {
			if (estimates[j] === 4 || estimates[j] === 5) {
				sumGoodEstimates++
			}
		}
		for (let l = 0; l < estimates.length; l++) {
			if (estimates[l] < averageBall) {
				sumBelowAverage++
			}
		}
		return `Кількість двійок - ${sumNumberTwos} <br>
Кількість хороших оцінок (добре, відмінно) - ${sumGoodEstimates} <br>
Кількість оцінок, які нижче середнього - ${sumBelowAverage} <br>`
	}

	let sumEstimates = getSumEstimates(2, 5, 5, 4, 4, 4, 3, 3, 1)

	document.write(sumEstimates)

}

