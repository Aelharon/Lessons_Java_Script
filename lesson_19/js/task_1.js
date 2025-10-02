"use strict";
if (confirm('Почати тестування ?')) {
	function ceClick() {
		this.classList.toggle('task-1-body__text--red')
		let nextElement = this.nextElementSibling
		while (nextElement && !nextElement.classList.contains('task-1-body__text--red')) {
			nextElement.classList.add('task-1-body__text--red')
			nextElement = nextElement.nextElementSibling
		}
	}
	const textHello = document.querySelectorAll('.task-1-body__text')
	for (const row of textHello) {
		row.onclick = ceClick
	}
}
