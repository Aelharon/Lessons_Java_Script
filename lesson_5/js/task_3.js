"use strict"

// Крок 0. Позначення даних
// Крок 1. Введення даних:
// Крок 2. Обчислення
// Крок 3. виведення результату


// Задача №3 Вивести на екран 8 кнопок з написом “Hello”.

if (confirm('Почати тестування?')) {


	for (let i = 1; i <= 8; i++) {
		document.write(
			`Кнопка №${i} 
		<button class="button-lesson-5" type="submit">Hello</button> <br>`
		)
	}


}
