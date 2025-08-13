"use strict"

// Крок 0. Позначення даних
// Крок 1. Введення даних:
// Крок 2. Обчислення
// Крок 3. виведення результату


// Задача 5. Створити окремі функції, які переводять:
// 1. Сантиметри у дюйми;
// 2. Кілограми у фунти;
// 3. Кілометри у милі.


if (confirm('Почати тестування?')) {

	const getCentimeterToIncn = centimeter => centimeter / 2.54
	const getKgToPound = kg => kg * 2.205
	const geKilometerToMile = Kilometer => Kilometer / 1.609

	const userAnswerConvert = parseInt(prompt('Яку величину перевести, введіть номер ?\n 1 - Сантиметри у дюйми\n 2 - Кілограми у фунти\n 3 - Кілометри у милі', '1'))

	const userAnswerNumber = parseInt(prompt('Введіть кількість одиниць', '50'))

	let res
	switch (userAnswerConvert) {
		case 1: res = `${userAnswerNumber} сантиметрів = ${getCentimeterToIncn(userAnswerNumber)} дюймів <br>`
			break
		case 2: res = `${userAnswerNumber} кілограмів = ${getKgToPound(userAnswerNumber)} фунтів <br>`
			break
		case 3: res = `${userAnswerNumber} кілометрів = ${geKilometerToMile(userAnswerNumber)} миль <br>`
			break
		default:
			throw new Error("Помилка");
	}

	document.write(res)

}
