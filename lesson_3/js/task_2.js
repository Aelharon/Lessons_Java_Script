"use strict"



// Задача №2 
// З клавіатури вводиться ціна товару і кількість грошей. 
// Якщо грошей не вистачає то відмовляємо у покупці, інакше,
// якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн

// Крок 0. Позначення даних
// Ціна товару - priceOfGoods
// Кількість грошей - quantityMoney

// Крок 1. Введення даних:
const priceOfGoods = parseFloat(prompt('Введіть ціну товару грн.', '10'))
const quantityMoney = parseFloat(prompt('Введіть кількість грошей грн.', '114.75'))
const priceLottery = 4


// Крок 2,3. Обчислення та виведення результату
if (quantityMoney > priceOfGoods) {
	let quantityOfGoods = Math.floor(quantityMoney / priceOfGoods)
	let rest = parseFloat(quantityMoney % priceOfGoods)
	document.write(`<p>Придбано ${quantityOfGoods} одиниць товару <p>`)
	if (rest >= priceLottery)
		document.write(`<p>Залишок ${rest} грн.</p> <p> Придбайте лотерею за 4 грн.</p>`)
}
else
	document.write('<p>Недостатньо коштів</p>')
