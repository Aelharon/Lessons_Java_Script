"use strict";
if (confirm('Почати тестування ?')) {

	class isNotNumberError extends Error {
		constructor() {
			super()
			this.message = 'Має бути числом'
			this.name = 'isNotNumberError'
		}
	}
	class isValidMonth extends Error {
		constructor() {
			super()
			this.message = 'Місяць має бути від 1 до 12'
			this.name = 'isValidMonth'
		}
	}
	class isHoliday extends Error {
		constructor() {
			super()
			this.message = '6-8 місяці канікули'
			this.name = 'isHoliday'
		}
	}
	class isLastMonthSemester extends Error {
		constructor() {
			super()
			this.message = 'В останній місяць семестру немає перездач'
			this.name = 'isLastMonthSemester'
		}
	}
	class isValidGrade extends Error {
		constructor() {
			super()
			this.message = 'Оцінка має бути від 1 до 100'
			this.name = 'isValidGrade'
		}
	}
	function getResult(userMonth, userGrade, result) {
		try {
			if (isNaN(userMonth)) throw new isNotNumberError()
			if (userMonth < 1 && userMonth > 12) throw new isValidMonth()
			if ([6, 7, 8].includes(userMonth)) throw new isHoliday()
			if ([5, 12].includes(userMonth)) throw new isLastMonthSemester()

			if (isNaN(userGrade)) throw new isNotNumberError()
			if (userGrade < 1 && userGrade > 100) throw new isValidGrade()

			if (userGrade < 60) {
				result.classList.remove('ask-body__span-result--error')
				result.innerText = 'Так'
			}
			else {
				result.classList.remove('ask-body__span-result--error')
				result.innerText = 'Балів достатньо, перездача не потрібна'
			}
		} catch (err) {
			if (err instanceof isNotNumberError) {
				result.classList.add('ask-body__span-result--error')
				result.innerText = err.message
			}
			else if (err instanceof isValidMonth) {
				result.classList.add('ask-body__span-result--error')
				result.innerText = err.message
			}
			else if (err instanceof isHoliday) {
				result.classList.add('ask-body__span-result--error')
				result.innerText = err.message
			}
			else if (err instanceof isLastMonthSemester) {
				result.classList.add('ask-body__span-result--error')
				result.innerText = err.message
			}
			else if (err instanceof isValidGrade) {
				result.classList.add('ask-body__span-result--error')
				result.innerText = err.message
			}
		}
	}
	function getData() {
		const userMonth = parseFloat(document.querySelector('.task-body__input-date').value)
		const userGrade = parseFloat(document.querySelector('.task-body__input-grade').value)
		const spanResult = document.querySelector('.task-body__span-result')
		getResult(userMonth, userGrade, spanResult)
	}
	window.onload = function () {
		const button = document.querySelector('.task-body__button').onclick = getData
	}
}










// function getData() {
// 	const holidays = [6, 7, 8]
// 	const userMonth = parseFloat(document.querySelector('.task-body__input-date').value)
// 	if (typeof userMonth === "number" && !holidays.includes(userMonth) && userMonth >= 1 && userMonth <= 12) {
// 		console.log(userMonth);
// 	}
// 	const userGrade = parseFloat(document.querySelector('.task-body__input-grade').value)
// 	if (typeof userGrade === "number" && userGrade >= 1 && userGrade <= 100) {
// 		console.log(userGrade);
// 	}
// 	getResult(userMonth, userGrade)
// }

// function getResult(userMonth, userGrade) {
// 	const spanResult = document.querySelector('.task-body__span-result')
// 	if (userMonth < 12 && userGrade < 60) {
// 		spanResult.innerText = 'Так'
// 	} else {
// 		spanResult.innerText = 'Ні'
// 	}
// }

// const button = document.querySelector('.task-body__button').onclick = getData

// console.log(userGrade);

// 	window.onload = function () {

// 	}



