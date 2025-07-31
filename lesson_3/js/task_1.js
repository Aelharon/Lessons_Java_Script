"use strict"



// Задача №1 З клавіатури вводяться імена двох дітей та кількість у них цукерок.
// Вивести на екран ім’я тієї дитини, у якої кількість цукерок є більшою,
// або вивести, що кількість однакова.

// Крок 0. Позначення даних
// ім’я дівчини - nameOfGirl
// ім’я хлопця - nameOfBoy
// кількість цукерок у дівчини - girlNumberSweets
// кількість цукерок у хлопця - boyNumberSweets

// Крок 1. Введення даних:
const nameOfGirl = prompt("Введіть ім'я дівчини", "Міа")
const nameOfBoy = prompt("Введіть ім'я хлопця", "Іван")
const girlNumberSweets = parseInt(prompt(`Введіть кількість цукерок ${nameOfGirl}`, '3'))
const boyNumberSweets = parseInt(prompt(`Введіть кількість цукерок ${nameOfBoy}`, '5'))
let result

// Крок 2. Обчислення
if (girlNumberSweets > boyNumberSweets)
	result = `${nameOfGirl} має більше цукерок`
else if (girlNumberSweets === boyNumberSweets)
	result = `${nameOfGirl} та ${nameOfBoy} мають однакову кількість цукерок`
else
	result = `${nameOfBoy} має більше цукерок`


// Крок 3. виведення результату
document.write(`<p> ${result} </p>`)
