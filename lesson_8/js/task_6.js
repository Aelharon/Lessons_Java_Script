"use strict"

// Крок 0. Позначення даних
// Крок 1. Введення даних:
// Крок 2. Обчислення
// Крок 3. виведення результату


// Задача 6. Дано послідовність цін товарів та назв (у окремих масивах). 
// Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).
// Приклад збереження даних
// let productsPrices = [1000, 20, 31]
// let productsTitles = [‘cheese’, ‘juice’, ‘bread’]


if (confirm('Почати тестування?')) {



	let productsPrices = [25, 35, 30, 50, 55, 120, 150,]
	let productsTitles = ['Огірки', 'Капуста', 'Картопля', 'Пиво', 'Вобла', 'Курка', 'Ананас']
	const userMoney = parseInt(prompt('Введіть кількість наявних грошей', '60'))

	document.write(`Ви можете купити: <br>`)

	function whatProductsBought(name, price, thereISMoney) {
		let result = ''
		for (let i = 0; i < name.length; i++) {
			if (thereISMoney >= price[i]) {
				result += `${name[i]} - ${productsPrices[i]} <br>`
			}
		}
		return result
	}

	let p = whatProductsBought(productsTitles, productsPrices, userMoney)
	document.write(p)


}

