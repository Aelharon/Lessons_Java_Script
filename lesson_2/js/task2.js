"use strict"

/*
Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.
*/

const yearBirth = parseFloat(prompt('Ведіть рік народження', '0'))
const currentYear = parseFloat(prompt('Ведіть Поточний рік', '0'))


const years = currentYear - yearBirth


document.write(`Повних ${years} років`)
