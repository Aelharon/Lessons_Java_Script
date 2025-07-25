"use strict"

/*
Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.
*/

const quantitySeconds = parseFloat(prompt('Введіть кількість секунд', '0'))


const quantityMinutes = quantitySeconds / 60
const quantityHours = quantitySeconds / 3600


document.write(`<p> ${quantitySeconds} секунд = ${quantityMinutes} хвилин </p>`)
document.write(`<p> ${quantitySeconds} секунд = ${quantityHours} годин </p>`)

