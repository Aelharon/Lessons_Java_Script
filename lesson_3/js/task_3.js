"use strict"



// Задача №3
// Випадковим чином генерується число від 1 до 5.
// Спробуйте вгадати число за 2 спроби.


const minNumber = 1, maxNumber = 5
let randomNumber = minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1))
// console.log(`${randomNumber}`);
let result


let attemptGuessNumber_1 = parseInt(prompt(`Введіть перше число`, '0'))

if (attemptGuessNumber_1 == randomNumber)
	result = 'Вгадав'
else if (attemptGuessNumber_1 !== randomNumber) {
	let attemptGuessNumber_2 = parseInt(prompt(`Введіть друге число`, '0'))
	if (attemptGuessNumber_2 == randomNumber)
		result = 'Вгадав'
	else
		result = `Не вгадав, число "${randomNumber}"`
}
document.write(`<p>${result}</p>`)


