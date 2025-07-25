"use strict"

/*
Задача 7. Знайти суму випадкового номера місяця (від 1 до 12)
та випадкового номера дня (від 0 до 6).
*/


const minMonth = 1, maxMonth = 12
const minDay = 0, maxDay = 6
let month = minMonth + Math.floor(Math.random() * (maxMonth - minMonth + 1))
let day = minDay + Math.floor(Math.random() * (maxDay - minDay + 1))
let sumRandomDaeMonth = month + day

document.write(`
	<p> Випадковий місяць - ${month} </p>
	<p> Випадковий день - ${day} </p>
	<p> Сума випадкового дня та місяця = ${sumRandomDaeMonth} </p>`)




