"use strict"

// Крок 0. Позначення даних
// Крок 1. Введення даних:
// Крок 2. Обчислення
// Крок 3. виведення результату


// Задача №7
// Дано послідовність платіжок протягом року.
// Знайти сумарну кількість грошей за:
// 1)	за весь рік;
// 2)	у першій половині року;
// 3)	у другій половині року;
// 4)	за літо;
// 5)	за ІІ квартал;
// 6)	за парні місяці (з парними номерами);
// 7)	за місяці, які є початковими у сезоні (весна, літо, осінь, зима).


if (confirm('Почати тестування?')) {

	function getSumBills(...numbers) {
		let sumAllYear = 0
		for (let i = 0; i < numbers.length; i++) {
			sumAllYear += numbers[i]
		}
		let sumFirstHalfYear = 0
		for (let half = 0; half < 6; half++) {
			sumFirstHalfYear += numbers[half]
		}
		let sumEndHalfYear = 0
		for (let half2 = 6; half2 < numbers.length; half2++) {
			sumEndHalfYear += numbers[half2]
		}
		let sumSummer = 0
		for (let j = 5; j < 8; j++) {
			sumSummer += numbers[j]
		}
		let sumSecondQuarter = 0
		for (let q = 3; q < 6; q++) {
			sumSecondQuarter += numbers[q]
		}
		let sumPairNumberMonth = 0
		for (let p = 1; p < numbers.length; p += 2) {
			sumPairNumberMonth += numbers[p]
		}
		let sumFirstMonthSeason = 0
		for (let f = 2; f < numbers.length; f += 3) {
			sumFirstMonthSeason += numbers[f]
		}


		return `Сумарна кількість грошей за рік - ${sumAllYear} <br>
	Сумарна кількість грошей за першу половину року - ${sumFirstHalfYear} <br>
	Сумарна кількість грошей за другій половину року - ${sumEndHalfYear} <br>
	Сумарна кількість грошей за літо - ${sumSummer} <br>
	Сумарна кількість грошей ІІ квартал - ${sumSecondQuarter} <br>
	Сумарна кількість за парні місяці - ${sumPairNumberMonth} <br>
	Сумарна кількість за місяці, які є початковими у сезоні - ${sumFirstMonthSeason} <br>
	`
	}


	let bills = getSumBills(650, 950, 1100, 3500, 1800, 4100, 4200, 3700, 3300, 2900, 3450, 3250)
	document.write(bills)


}
