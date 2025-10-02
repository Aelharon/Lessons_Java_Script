"use strict";
if (confirm('Почати тестування ?')) {
	function fillingInputs() {
		let numberValue = parseInt(this.value)
		let numberValueTwo = parseInt(this.value)
		let nextInput = this.nextElementSibling
		let previousInput = this.previousElementSibling
		while (nextInput) {
			numberValue++
			nextInput.setAttribute('value', numberValue);
			nextInput = nextInput.nextElementSibling
		}
		while (previousInput) {
			numberValueTwo--
			previousInput.setAttribute('value', numberValueTwo);
			previousInput = previousInput.previousElementSibling
		}
	}
	const inputList = document.querySelectorAll('.task-2-body__input')
	for (const input of inputList) {
		input.onchange = fillingInputs
	}
}
