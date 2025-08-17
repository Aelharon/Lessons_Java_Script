"use strict"

// Крок 0. Позначення даних
// Крок 1. Введення даних:
// Крок 2. Обчислення
// Крок 3. виведення результату


// Задача 1. Дано масив, який містить оцінки з К предметів.
// Знайти середній бал і з'ясувати до якої категорії він
// відноситься (відмінник, двієчник (має хоча би одну двійку),
// хорошист (оцінки добре і відмінно), трієчник(є хоча би одна трійка)).

if (confirm('Почати тестування?')) {

	let arrEstimates = [1, 4, 5, 4, 5, 5]
	let sum = 0

	for (let i = 0; i < arrEstimates.length; i++) {
		sum += arrEstimates[i]
	}

	let averageScore = Math.floor(sum / arrEstimates.length)

	for (let j = 0; j < arrEstimates.length; j++) {
		if (arrEstimates[j] === 2)
			averageScore = 2
		if (arrEstimates[j] === 3)
			averageScore = 3
	}

	let category
	switch (averageScore) {
		case 1:
		case 2:
			category = 'Двієчник'
			break
		case 3:
			category = 'Трієчник'
			break
		case 4:
			category = 'Хорошист'
			break
		case 5:
			category = 'Відмінник'
			break
	}

	document.write(`Учень ${category} <br>`)

}

