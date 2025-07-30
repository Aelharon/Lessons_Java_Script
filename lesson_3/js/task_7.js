"use strict"



// Задача №7
// З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься

const numMonth = parseInt(prompt('Введіть номер місяця', '2'))
let result


switch (numMonth) {
	case 12:
	case 1:
	case 2: result = 'Зима'
		break
	case 3:
	case 4:
	case 5: result = 'Весна'
		break

	case 6:
	case 7:
	case 8: result = 'Літо'
		break

	case 9:
	case 10:
	case 11: result = 'Осінь'
		break

	default: result = 'Невірно введені данні, від 1 до 12'
		break
}

document.write(`<p> ${result} </p>`)






