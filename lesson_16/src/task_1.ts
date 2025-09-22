class Backpack {
	private _weight: number
	private _items: number[]
	constructor(initialItems: number[], initialWeight: number) {
		this._items = initialItems
		this._weight = initialWeight
	}
	public get Weight(): number {
		return this._weight
	}
	public get Items(): number[] {
		return this._items
	}
	public set AddItems(wei: number) {
		if ((this.allItemsWeight() + wei) >= this._weight) throw new Error('Backpack is filled')
		this._items.push(wei)
	}
	allItemsWeight(): number {
		return this.Items.reduce((prevSum, el) => prevSum + el, 0)
	}
	public toString(): string {
		return `Максимальна загальна вага у наплічнику ${this._weight} кг <br> Вага предметів кг ${this._items}`
	}
}
try {
	let backpack1 = new Backpack([], 15)
	backpack1.AddItems = 2
	backpack1.AddItems = 4
	backpack1.AddItems = 1
	backpack1.AddItems = 5
	document.write(backpack1.toString())
} catch (error) {
	document.write(error.message)
}
