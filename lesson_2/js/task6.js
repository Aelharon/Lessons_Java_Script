"use strict"

/*
Задача 6. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. 
Обчислити вартість кожного товару окремо та загальну вартість. 
Вивести чек (як у супермаркеті) використовуючи елементи розмітки.
*/

const apple = parseFloat(prompt('Введіть вартість яблука', '0'))
const quantityApple = parseFloat(prompt('Введіть кількість яблук', '0'))
const sumApple = apple * quantityApple

const passionFruit = parseFloat(prompt('Введіть вартість маракуйі', '0'))
const quantityPassionFruit = parseFloat(prompt('Введіть кількість маракуйі', '0'))
const sumPassionFruit = passionFruit * quantityPassionFruit

const pineapple = parseFloat(prompt('Введіть вартість ананасу', '0'))
const quantityPineapple = parseFloat(prompt('Введіть кількість ананасів', '0'))
const sumPineapple = pineapple * quantityPineapple

const totalPrice = sumApple + sumPassionFruit + sumPineapple


document.write(`
	<h3>Чек фруктів з марсу</h3>
		<table>
		<thead>
		<tr>
			<th>Назва</th>
			<th>Кількість</th>
			<th>Ціна</th>
		</tr>
			</thead>
	<tbody>
	<tr>
		<td>яблука</td>
		<td> x ${quantityApple}</td>
		<td>${sumApple} грн.</td>
	</tr>
		<tr>
		<td>маракуйя</td>
		<td> x ${quantityPassionFruit}</td>
		<td>${sumPassionFruit} грн.</td>
	</tr>
		</tr>
		<tr>
		<td>ананас</td>
		<td> x ${quantityPineapple}</td>
		<td>${sumPineapple} грн.</td>
	</tr>
	</tbody>
		</table >
		<p>До сплати  ${totalPrice} грн.</p>`)




