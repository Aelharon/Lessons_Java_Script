"use strict"



// Задача №6
// З клавіатури вводиться номер дня тижня. Вивести на екран назву дня

const numDay = parseFloat(prompt('Введіть номер дня тижня', '2'))
let result

switch (numDay) {
	case 1: result = 'Понеділок'
		break
	case 2: result = 'Вівторок'
		break
	case 3: result = 'Середа'
		break
	case 4: result = 'Четвер'
		break
	case 5: result = "П'ятниця"
		break
	case 6: result = 'Субота'
		break
	case 7: result = 'Неділя'
		break
	default: result = 'Невірно введені данні, від 1 до 7'
		break
}

document.write(`<p> ${result} </p>`)






