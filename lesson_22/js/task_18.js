"use strict";
if (confirm('Почати тестування ?')) {

	const backgroundColor = localStorage.getItem('bgColor')
	const counter = sessionStorage.getItem('counter')
	const spanCountChange = document.querySelector('.task-body-18__count')

	if (backgroundColor) {
		document.body.style.backgroundColor = backgroundColor
	}

	let countChange = 0
	if (counter) {
		spanCountChange.innerText = counter
		countChange = counter
	}
	else {
		spanCountChange.innerText = countChange
	}

	function changeBackgroundColor(color) {
		document.body.style.backgroundColor = color
		countChange++
		sessionStorage.setItem('counter', countChange)
		spanCountChange.innerText = countChange
	}

	function saveColor() {
		const color = document.querySelector('.task-body-18__input').value
		localStorage.setItem('bgColor', color)
		changeBackgroundColor(color)
	}

	window.onload = function () {
		const btn = document.querySelector('.task-body-18__btn')
		btn.addEventListener('click', saveColor)
	}
}


