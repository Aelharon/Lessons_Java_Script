// Варіант 1 не відповідає умові
// if (confirm('Почати тестування?')) {
// 	class ServiceCar {
// 		static driverRef: string
// 		static brandRef: string
// 		static autoNumberRef: string
// 		constructor(driver: string, brand: string, autoNumber: string) {
// 			if (ServiceCar.driverRef) return ServiceCar.driverRef
// 			if (ServiceCar.brandRef) return ServiceCar.brandRef
// 			if (ServiceCar.autoNumberRef) return ServiceCar.autoNumberRef

// 			ServiceCar.driverRef = driver
// 			ServiceCar.brandRef = brand
// 			ServiceCar.autoNumberRef = autoNumber
// 		}
// 		toString() {
// 			return `Водій - ${ServiceCar.driverRef} <br>
// 				Марка авто - ${ServiceCar.brandRef} <br>
// 				Номер авто - ${ServiceCar.autoNumberRef}<hr>`
// 		}
// 	}

// 	const car1 = new ServiceCar('Ken Block', 'Koenigsegg', '007')
// 	document.write(car1.toString())
// 	const car2 = new ServiceCar('Emilien', 'Trabant', '000')

// 	document.write(`Створюємо, та змінюємо на: <br> Водій - Emilien <br>
// 	Марка авто - Trabant <br> Номер авто - 000 <br> <br>Результат: <br> <br> ${car2}`)
// }
// Варіант 2--------------------------------------------------------------------------------------
if (confirm('Почати тестування?')) {
	class ServiceCar {
		driver: string
		brand: string
		autoNumber: string
		static serviceCarRef: number
		constructor(driver: string, brand: string, autoNumber: string) {
			if (ServiceCar.serviceCarRef) return ServiceCar.serviceCarRef

			this.driver = driver
			this.brand = brand
			this.autoNumber = autoNumber

			this.serviceCar = this.getArrayServiceCar()
			ServiceCar.serviceCarRef = this
		}
		getArrayServiceCar() {
			const arr = [this.driver, this.brand, this.autoNumber]
			return arr
		}
		toString() {
			return `Водій - ${this.serviceCar[0]} <br>
				Марка авто - ${this.serviceCar[1]} <br>
				Номер авто - ${this.serviceCar[2]}<hr>`
		}
	}
	const car1 = new ServiceCar('Ken Block', 'Koenigsegg', '007')
	const car2 = new ServiceCar('Emilien', 'Trabant', '000')
	document.write(car1.toString())
	document.write(`Створюємо, та змінюємо на: <br> Водій - Emilien <br>
Марка авто - Trabant <br> Номер авто - 000 <br> <br>Результат: <br> <br> ${car2}`)
}