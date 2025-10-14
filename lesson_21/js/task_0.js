"use strict";
if (confirm('Почати тестування ?')) {
	class Person {
		constructor(name, age, address) {
			this.name = name
			this.age = age
			this.address = address
		}
		getYearBirth() {
			let currentYear = new Date().getFullYear()
			const yearBirth = currentYear - this.age
			return yearBirth
		}
		toString() {
			return `
		Им'я - ${this.name} <br>
		Рік народження - ${this.getYearBirth()} <br>
		Повних років - ${this.age} <br>
		Адреса: <br>
		Місто - ${this.address[0]} <br>
		Вулиця - ${this.address[1]} <br>
		Номер дому - ${this.address[2]} <br>`
		}
	}
	class Worker extends Person {
		constructor(name, age, address, jobTitle, salaryAmount, tax) {
			super(name, age, address)
			this.jobTitle = jobTitle
			this.salaryAmount = salaryAmount
			this.tax = tax
		}
		getTotalSalaryInYear() {
			const salaryInYear = this.salaryAmount * 12
			return salaryInYear
		}
		getTotalTaxInYear() {
			const totalTax = this.getTotalSalaryInYear() * this.tax / 100
			return totalTax
		}
		toString() {
			return ` ${super.toString()}
		Посада - ${this.jobTitle} <br>
		Зарплатня за рік - ${this.getTotalSalaryInYear()} <br>
		Оподаткування за рік - ${this.getTotalTaxInYear()} <hr>`
		}
	}


	const worker1 = new Worker('Bill', 50, ['Ternopil', 'Flower', 25], 'Gardener', 50000, 30)
	document.write(worker1)

}


