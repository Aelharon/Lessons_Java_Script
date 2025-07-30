"use strict"



// Задача №5
// З клавіатури вводиться назва категорії водія 
// (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль).
// Вивести на екран назву транспортного засобу, яким він може керувати.

const categoryDriver = prompt('Введіть категорію водія A, B або C', 'A')
let result

if (categoryDriver === 'A' || categoryDriver === 'a')
	result = 'Дозволяється керувати мотоциклом'
else if (categoryDriver === 'B' || categoryDriver === 'b')
	result = 'Дозволяється керувати легковим автомобілем'
else if (categoryDriver === 'C' || categoryDriver === 'c')
	result = 'Дозволяється керувати вантажівкою'
else
	result = 'Не вірно введені данні'

document.write(`<p> ${result} </p>`)






