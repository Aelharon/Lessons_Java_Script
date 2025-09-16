
if (confirm('Почати тестування?')) {
	class auto {
		brand: string
		sizeTank: number
		numberLitersAvailable: number
		numberSeats: number
		numberPassengers: number
		constructor(defBrand: string, defSizeTank: number, defNumberLitersAvailable: number,
			defNumberSeats: number, defNumberPassengers: number) {
			this.brand = defBrand,
				this.sizeTank = defSizeTank,
				this.numberLitersAvailable = defNumberLitersAvailable,
				this.numberSeats = defNumberSeats,
				this.numberPassengers = defNumberPassengers
		}
		refueling(refuelingLiter: number) {
			if ((this.sizeTank - this.numberLitersAvailable) > refuelingLiter) { this.numberLitersAvailable = this.numberLitersAvailable + refuelingLiter }
			else {
				let temp = (this.sizeTank - this.numberLitersAvailable)
				this.numberLitersAvailable = this.numberLitersAvailable + temp
			}
		}
		toString() {
			return `${this.numberPassengers}`
		}
		addPassengers(addPassen: number) {
			if ((this.numberSeats - this.numberPassengers) > addPassen) {
				this.numberPassengers = this.numberPassengers + addPassen
			} else {
				let tempPassen = (this.numberSeats - this.numberPassengers)
				this.numberPassengers = this.numberPassengers + tempPassen
			}
		}
		rmPassengers(rmPassengersNumber: number) {
			if (this.numberPassengers >= rmPassengersNumber) {
				this.numberPassengers = this.numberPassengers - rmPassengersNumber
			} else {
				this.numberPassengers = this.numberPassengers - this.numberPassengers
			}
		}
	}
	let zaz = new auto('ZAZ', 40, 10, 12, 3)
	for (const key in zaz) {
		document.write(`${key} - ${zaz[key]}<br>`)
	}
	document.write(`<hr>`)
	zaz.refueling(15)
	document.write(`Після заправки у баку ${zaz.numberLitersAvailable} літрів палива<br>`)
	zaz.addPassengers(7)
	document.write(`Кількість пасажирів збільшилась до ${zaz}<br>`)
	zaz.rmPassengers(3)
	document.write(`Кількість пасажирів зменшилась до ${zaz}<br>`)
}