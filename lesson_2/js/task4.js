"use strict"

/*
Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.
*/

const lengthCentimeter = parseFloat(prompt('Введіть довжину у сантиметрах', '0'))


const metersLength = lengthCentimeter / 100
const kilometersLength = lengthCentimeter / 100000


document.write(`<p> ${lengthCentimeter} сантиметрів = ${metersLength} метрів </p>`)
document.write(`<p> ${lengthCentimeter} сантиметрів = ${kilometersLength} кілометрів </p>`)

