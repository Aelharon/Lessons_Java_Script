"use strict"



// Задача №5
// З клавіатури вводиться назва категорії водія 
// (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль).
// Вивести на екран назву транспортного засобу, яким він може керувати.

const categoryDriver = prompt('Введіть категорію водія A, B або C', 'A').toUpperCase()
let result

if (categoryDriver === 'A')
	result = 'Дозволяється керувати мотоциклом'
else if (categoryDriver === 'B')
	result = 'Дозволяється керувати легковим автомобілем'
else if (categoryDriver === 'C')
	result = 'Дозволяється керувати вантажівкою'
else
	result = 'Не вірно введені данні'

console.log(`${categoryDriver}`);
document.write(`<p> ${result} </p>`)






