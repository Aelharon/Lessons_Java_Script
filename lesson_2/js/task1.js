"use strict"

/*
Задача 1. Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці
*/

const a = parseFloat(prompt('Число "a"', '0'))
const b = parseFloat(prompt('Число "b"', '0'))


const S1 = a + b

const S2 = a * b

const S3 = a / b

document.write(`
		<table>
		<thead >
		<tr>
			<th>Сума</th>
			<th>Добуток</th>
			<th>Частка</th>
		</tr>
			</ >
	<tbody>
		<td>${S1}</td>
		<td>${S2}</td>
		<td>${S3}</td>
	</tbody>
		</table >`)
