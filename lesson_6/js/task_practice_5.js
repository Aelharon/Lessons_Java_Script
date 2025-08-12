"use strict"

// Крок 0. Позначення даних
// Крок 1. Введення даних:
// Крок 2. Обчислення
// Крок 3. виведення результату


// While_DoWhile. Задача №3
// З клавіатури вводяться два числа N i M (N<M). 
// Вивести а екран числа
// N---M
// N+1 --- M-1
// N+2 --- M-2
// N+3 --- M-3


if (confirm('Почати тестування?')) {

	let N = parseInt(prompt('введіть N ((N<M))'))
	let M = parseInt(prompt('введіть M ((N<M))'))
	let number = 0


	do {
		N += number
		M -= number
		// if (M < 0) break
		document.write(`${N} --- ${M} <br>`)
		++number
	} while (M > 0);





}
