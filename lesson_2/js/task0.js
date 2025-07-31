"use strict"

/* 
Задача 0. Обчислити значення виразів
*/

const a = parseFloat(prompt('Число "a"', '0'))
const b = parseFloat(prompt('Число "b"', '0'))
const c = parseFloat('12')

const S1 = a + c + b
document.write(`<p> Сума S1 = ${S1} </p>`)

const S2 = Math.sqrt((a + b) / (2 * a))
document.write(`<p> Корінь S2 = ${S2} </p>`)

const S3 = Math.cbrt((a + b) * c)
document.write(`<p> Куб. корінь S3 = ${S3} </p>`)

const S4 = Math.sin(a / -b)
document.write(`<p> Сінус S4 = ${S4} </p>`)