"use strict"

// Крок 0. Позначення даних
// Крок 1. Введення даних:
// Крок 2. Обчислення
// Крок 3. виведення результату


// Задача №2
// З клавіатури поступово вводяться символи поки не буде введено символ «а».
// Вивести рядок символів у зворотному порядку.

if (confirm('Почати тестування?')) {



	// ? Варіант 3

	let sumSymbol = ''
	let userSymbol = ''

	document.write('<div>')

	while (userSymbol !== 'a') {
		sumSymbol = userSymbol + sumSymbol
		userSymbol = prompt('Введіть символ', 'b')
	}

	document.write(sumSymbol)
	document.write('</div><br>')

	// ? Варіант 2

	// let sumSymbol = ''
	// let userSymbol = ''

	// document.write('<div>')

	// document.write('<div style="display:inline-flex;flex-direction: row-reverse">')

	// while (userSymbol !== 'a') {
	// 	sumSymbol += `<span> ${userSymbol} </span>`
	// 	userSymbol = prompt('Введіть символ', 'b')
	// }

	// document.write(sumSymbol)
	// document.write('</div><br>')

	// ? Варіант 1

	// let sumSymbol = ''
	// let userSymbol = ''

	// document.write('<div>')

	// do {
	// 	userSymbol = prompt('Введіть символ', 'b')
	// 	sumSymbol += `<span> ${userSymbol} </span>`
	// } while (userSymbol !== 'a')

	// document.write(sumSymbol)
	// document.write('</div><br>')


}
