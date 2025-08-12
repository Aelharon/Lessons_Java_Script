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

	const userAnswerCentimeter = parseInt(prompt('Введіть кількість сантиметрів', '50'))
	const userAnswerKg = parseInt(prompt('Введіть кількість кілограмів', '10'))
	const userAnswerKilometer = parseInt(prompt('Введіть кількість кілометрів', '50'))

	document.write(`
	${userAnswerCentimeter} сантиметрів = ${getCentimeterToIncn(userAnswerCentimeter)} дюймів <br>
	${userAnswerKg} кілограмів = ${getKgToPound(userAnswerKg)} фунтів <br>
	${userAnswerKilometer} кілометрів = ${geKilometerToMile(userAnswerKilometer)} миль <br>
	`)

}
