"use strict"



// Задача №5
// З клавіатури вводиться назва категорії водія 
// (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль).
// Вивести на екран назву транспортного засобу, яким він може керувати.

const categoryDriver = prompt('Введіть категорію водія A, B або C', 'A')
let result

if (categoryDriver.toUpperCase() === 'A')
	result = 'Дозволяється керувати мотоциклом'
else if (categoryDriver.toUpperCase() === 'B')
	result = 'Дозволяється керувати легковим автомобілем'
else if (categoryDriver.toUpperCase() === 'C')
	result = 'Дозволяється керувати вантажівкою'
else
	result = 'Не вірно введені данні'

console.log(`${categoryDriver}`);
document.write(`<p> ${result} </p>`)






