"use strict";
if (confirm('Почати тестування ?')) {
	const taskBody = document.querySelector('.task-3-body')
	function getRandomNumber(minNumber, maxNumber) {
		let randomNumber = minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1))
		return randomNumber
	}
	function getNumbersList() {
		for (let i = 1; i <= 5; i++) {
			const bodyOl = document.createElement('ol')
			bodyOl.className = 'ol-list'
			const numberItems = getRandomNumber(1, 10)
			for (let j = 0; j < numberItems; j++) {
				const rowLi = document.createElement('li')
				rowLi.innerText = getRandomNumber(1, 100)
				bodyOl.append(rowLi)
			}
			taskBody.append(bodyOl)
		}
	}
	getNumbersList()

	function colorItems() {
		const olList = document.querySelectorAll('.ol-list')
		for (let k = 0; k < olList.length; k++) {
			if (olList[k].children.length % 2 === 0) {
				olList[k].classList.add('ol-list--green')
			} else {
				olList[k].classList.add('ol-list--red')
			}
		}
	}
	const btn = document.querySelector('.body-btn__button')
	btn.onclick = colorItems
}
