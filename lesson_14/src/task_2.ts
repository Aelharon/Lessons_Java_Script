// Задача 2.
// Розробити функцію, у яку передають об’єкт (день, місяць, рік).
// Визначити, який буде рік через N місяців.
if (confirm('Почати тестування?')) {
	type UsDate = {
		day: number,
		month: number,
		year: number,
	}

	let userDate: UsDate = {
		day: 10,
		month: 9,
		year: 2025
	}

	userDate.day = parseInt(prompt('Введіть номер поточного дня')) || 10
	userDate.month = parseInt(prompt('Введіть номер поточного місяця')) || 9
	userDate.year = parseInt(prompt('Введіть номер поточного року')) || 2025
	const monthLetter: number = parseInt(prompt('Введіть через скільки місяців потрібен рік')) || 12

	for (const key in userDate) {
		document.write(`${key} - ${userDate[key]} <br> `)
	}
	document.write(`додати ${monthLetter} місяців <br><br>`)

	function getWhatYear({ month }, { year }, N): number {
		return (Math.floor(((year * 12) + (month - 1 + N)) / 12))
	}
	// const whatYear = getWhatYear(userDate, monthLetter)
	document.write(`через ${monthLetter} місяців буде ${getWhatYear(userDate, userDate, monthLetter)} рік <hr> `)

}