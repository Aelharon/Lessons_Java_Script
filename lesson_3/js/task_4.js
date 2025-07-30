"use strict"



// Задача №4
// З клавіатури вводиться вік людини.
// Вивести на екран ким він є 
// (дитиною у садочку, школярем, студентом, працівником, пенсіонером).



const howManyYears = parseInt(prompt('Введіть кількість повних років', (5)))
let result


if (howManyYears <= 6)
	result = 'Дитина'
else if (howManyYears <= 18)
	result = 'Школяр'
else if (howManyYears <= 23)
	result = 'Cтудент'
else if (howManyYears <= 59)
	result = 'Працівник'
else
	result = 'Пенсіонер'

document.write(`<p>${result}</p>`)






