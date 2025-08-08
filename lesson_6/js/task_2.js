"use strict"

// Крок 0. Позначення даних
// Крок 1. Введення даних:
// Крок 2. Обчислення
// Крок 3. виведення результату


// Задача №2
// З клавіатури поступово вводяться символи поки не буде введено символ «а».
// Вивести рядок символів у зворотному порядку.

 if (confirm('Почати тестування?')) {

let sumSymbol = ''
let userSymbol = ''

document.write('<div style="display:inline-flex;flex-direction: row-reverse">')

while (userSymbol !== 'a') {
	sumSymbol += `<span> ${userSymbol} </span>`
	userSymbol = prompt('Введіть символ', 'b')
}

// do {
// 	userSymbol = prompt('Введіть символ', 'b')
// 	sumSymbol += `<span> ${userSymbol} </span>`
// } while (userSymbol !== 'a')

document.write(sumSymbol)
document.write('</div><br>')


}

