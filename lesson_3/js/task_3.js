"use strict"



// Задача №3
// Випадковим чином генерується число від 1 до 5.
// Спробуйте вгадати число за 2 спроби.


const minNumber = 1, maxNumber = 5
// let randomNumber = minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1))
let randomNumber = minNumber + Math.floor(Math.random() * (5))
console.log(`${randomNumber}`);
let result


let attemptGuessNumber = parseInt(prompt(`Введіть перше число`, '0'))


if (attemptGuessNumber === randomNumber)
	result = 'Вгадав'
else
	attemptGuessNumber = parseInt(prompt(`Введіть друге число`, '0'))
if (attemptGuessNumber == randomNumber)
	result = 'Вгадав'
else
	result = `Не вгадав, число "${randomNumber}"`

document.write(`<p>${result}</p>`)


