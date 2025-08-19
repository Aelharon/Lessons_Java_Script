"use strict"

// Крок 0. Позначення даних
// Крок 1. Введення даних:
// Крок 2. Обчислення
// Крок 3. виведення результату


// Задача 3. Дано масив імен учнів. 
// З'ясувати скільки разів зустрічається ім’я «Іван».


if (confirm('Почати тестування?')) {

	const names = ['Таня', 'Глеб', 'Іван', 'Коля', 'Василь', 'Ваня', 'Іван', 'Валя']

	document.write('Імена учнів: <br>')
	for (let j = 0; j < names.length; j++) {
		document.write(`${names[j]}<br>`)
	}
	document.write('<hr>')


	function getScoreIvan() {
		let scoreName = 0
		for (let i = 0; i < names.length; i++) {
			if (names[i] === 'Іван')
				scoreName++
		}
		document.write(`Ім'я Іван повторюється разів ${scoreName}<br>`)
	}
	getScoreIvan(names)
}



// function getScoreIvan(...names) {
// 	let scoreName = 0
// 	for (let i = 0; i < names.length; i++) {
// 		if (names[i] === 'Іван')
// 			scoreName++
// 	}
// 	return scoreName
// }
// let res = getScoreIvan('Таня', 'Глеб', 'Іван', 'Коля', 'Василь', 'Ваня', 'Іван', 'Валя')
// document.write(`Ім'я Іван повторюється разів ${res}<br>`)


