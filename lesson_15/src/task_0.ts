
if (confirm('Почати тестування?')) {
	let objectWithSum = {
		numbers: [1, 5, 10, 15, 20, 25],
		getSum: function () {
			return this.numbers.reduce((prevSum: number, el: number) =>
				prevSum + el, 0)
		}
	};
	let objectWithProduct = {
		numbers: [2, 3, 4, 5, 6, 7, 8],
		getProduct: function (min = 3, max = 7) {
			const minIndex: number = this.numbers.findIndex((el: number) => el === min)
			const maxIndex: number = this.numbers.findIndex((el: number) => el === max)
			let product = 1
			for (let i = minIndex + 1; i < maxIndex; i++) {
				product *= this.numbers[i]
			}
			return product
		}
	};
	document.write(`Об'єкт 1 знаходження суми, метод call = ${objectWithSum.getSum.call(objectWithSum)} <br> `)
	document.write(`Об'єкт 2 знаходження суми, метод call = ${objectWithSum.getSum.call(objectWithProduct)} <br> `)
	document.write(`Об'єкт 1 знаходження добутку, метод apply = ${objectWithProduct.getProduct.apply(objectWithSum, [5, 20])} <br>`)
	document.write(`Об'єкт 2 знаходження добутку, метод apply = ${objectWithProduct.getProduct.apply(objectWithProduct)} <br>`)
}