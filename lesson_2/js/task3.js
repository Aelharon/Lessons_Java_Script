"use strict"

/* 
Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).
*/

const unitePriceProduct = parseFloat(prompt('Ціна за одиницю товару', '0'))
const quantityUnitsProduct = parseFloat(prompt('Кількість одиниць товару', '0'))


const sumPriceProduct = unitePriceProduct * quantityUnitsProduct
const TAX_PERCENTAGE = 5
const taxSum = sumPriceProduct * TAX_PERCENTAGE / 100
const totalPrice = sumPriceProduct + taxSum

document.write(`<p> Сумма за товар без ПДВ = ${sumPriceProduct} грн. </p>`)
document.write(`<p> ПДВ 5% = ${taxSum} грн. </p>`)
document.write(`<p> Сумма за товар з ПДВ = ${totalPrice} грн. </p>`)
