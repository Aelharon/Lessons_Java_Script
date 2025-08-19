"use strict"

// Крок 0. Позначення даних
// Крок 1. Введення даних:
// Крок 2. Обчислення
// Крок 3. виведення результату


// Задача 4. Дано послідовність номерів автомобілів. 
// Підрахувати кількість номерів, які:
// • починаються на букву «А»;
// • перша і остання літери співпадають;
// • складаються з більше ніш 5 символів;


if (confirm('Почати тестування?')) {

	const numbersCar = ['AX2543AO', 'BH4435A', 'AK1234KA', 'BP100KA', 'K34K', 'A25O']

	document.write(`Список номерів авто:<br>`)

	for (let j = 0; j < numbersCar.length; j++) {
		document.write(`${numbersCar[j]} <br>`)
	}

	document.write(`<hr>`)

	function getResultNumbersCars(numbersCar) {
		let firstA = 0
		let firstAndLastSymbol = 0
		let moreFiveSymbol = 0
		for (let i = 0; i < numbersCar.length; i++) {
			if (numbersCar[i][0] === 'A') {
				firstA++
			}
			if (numbersCar[i][0] === numbersCar[i][numbersCar[i].length - 1]) {
				firstAndLastSymbol++
			}
			if (numbersCar[i].length > 5) {
				moreFiveSymbol++
			}
		}
		document.write(`
		Кількість номерів, які: починаються на букву «А» - ${firstA} <br>
		Кількість номерів, які: перша і остання літери співпадають - ${firstA} <br>
		Кількість номерів, які: складаються з більше ніш 5 символів - ${moreFiveSymbol} <br>
		`)
	}

	getResultNumbersCars(numbersCar)

}

