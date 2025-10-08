"use strict";
if (confirm('Почати тестування ?')) {
	function countNumbersClick(e) {
		if (e.target.classList.contains('inputs__item')) {
			counter.countInputClicks++
			document.querySelector('.result__inputs').innerText = counter.countInputClicks
		}
		if (e.target.classList.contains('buttons__item')) {
			counter.countButtonClicks++
			document.querySelector('.result__buttons').innerText = counter.countButtonClicks
		}
		document.querySelector('.result__all-clicks').innerText = counter.countInputClicks + counter.countButtonClicks
	}
	const counter = {
		countAllClicks: 0,
		countInputClicks: 0,
		countButtonClicks: 0
	}
	window.onload = function () {
		const taskBody = document.querySelector('.task-body')
		taskBody.onclick = countNumbersClick
	}
}


