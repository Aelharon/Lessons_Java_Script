class Shop {
	private _stock:
		{
			name: string,
			quantity: number,
			price: number
		};
	private _revenue: number = 0
	constructor(product = [{}]) {
		this._stock = product
	}
	public get Stock() {
		return this._stock
	}
	SellingProduct(sellProduct: string, sellQuantity: number) {
		let product = this._stock.find(item => item.name === sellProduct)
		if (product.quantity < sellQuantity) { throw new Error('There is no such product') }
		this._revenue += product.price * sellQuantity,
			product.quantity = product.quantity - sellQuantity
	}
	public toString() {
		return `наторгував на ${this._revenue} грн.<br>`
	}
}
let availableProducts = new Shop([
	{ name: 'Морква', quantity: 50, price: 20 },
	{ name: 'Вобла', quantity: 30, price: 30 },
	{ name: 'Кавун', quantity: 300, price: 15 },
	{ name: 'Маракуйя', quantity: 10, price: 75 },
])
try {
	availableProducts.SellingProduct('Вобла', 5)
	availableProducts.SellingProduct('Кавун', 15)
	availableProducts.SellingProduct('Маракуйя', 4)
	document.write(availableProducts.toString())
	console.log(availableProducts);
}
catch (error) {
	document.write(error.message)
}
