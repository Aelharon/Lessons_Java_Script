"use strict";
// if (confirm('Почати тестування ?')) {
// Урок-20 приклад 3 =========================================================================
class Counter {
	constructor(currentValue, minValue, maxValue) {
		this.minValue = minValue
		this.maxValue = maxValue
		this.Value = currentValue
	}
	createValueEl() {
		this.valueEl = document.createElement('span')
		this.valueEl.innerText = this.currentValue
		return this.valueEl
	}

	sendEvent() {
		const changeEvent = new CustomEvent('counter-change', {
			detail: {
				value: this.currentValue,
			},
			bubbles: true
		})
		this.valueEl.dispatchEvent(changeEvent)
	}

	get Value() {
		return this.currentValue
	}
	set Value(newValue) {
		if (newValue >= this.minValue && newValue <= this.maxValue) {
			this.currentValue = newValue
			if (this.valueEl) {
				this.valueEl.innerText = newValue
				this.sendEvent()
			}
		}
	}
	actionHandler(stepValue) {
		this.Value = this.currentValue + stepValue
	}
	createActionBtn(title, stepValue) {
		const btn = document.createElement('button')
		btn.innerText = title
		btn.onclick = this.actionHandler.bind(this, stepValue)
		return btn
	}
	render() {
		const containerEl = document.createElement('span')

		containerEl.append(this.createActionBtn('-', -1))
		containerEl.append(this.createValueEl())
		containerEl.append(this.createActionBtn('+', +1))

		return containerEl
	}
}
//-------------------------------------------------------------
class ProductCard {
	constructor(productData, cssObj) {
		this.productData = { ...productData }
		this.cssObj = cssObj
	}
	createImg() {
		const img = document.createElement('img')
		img.src = this.productData.imgSrc
		img.className = this.cssObj.img
		return img
	}
	createTitleSection() {
		const titleEl = document.createElement('span')
		titleEl.innerText = this.productData.title
		titleEl.className = this.cssObj.title
		return titleEl
	}
	createPriceSection() {
		const priceEl = document.createElement('span')
		priceEl.innerText = this.productData.price
		priceEl.className = this.cssObj.price
		return priceEl
	}
	createTotalSection() {
		const totalPriceSectionEl = document.createElement('span')
		totalPriceSectionEl.innerText = 'Total : '
		totalPriceSectionEl.className = this.cssObj.totalPrice

		const totalPriceEl = document.createElement('span')
		totalPriceEl.innerText = this.productData.price * this.productData.count
		this.totalPriceEl = totalPriceEl

		totalPriceSectionEl.append(totalPriceEl)
		return totalPriceSectionEl
	}
	sendEvent() {
		const changeEvent = new CustomEvent('product-count-changed', {
			detail: {
				id: this.productData.id,
				count: this.productData.count,
			},
		})
		this.$el.dispatchEvent(changeEvent)
	}

	countChangeHandler(e) {
		const newCount = e.detail.value
		this.productData.count = newCount
		this.totalPriceEl.innerText = this.productData.price * newCount
	}
	createCounterSection() {
		const counter = new Counter(this.productData.count, 1, this.productData.amount)
		const counterEl = counter.render()
		counterEl.addEventListener('counter-change', this.countChangeHandler.bind(this))
		return counterEl
	}
	render() {
		const containerEl = document.createElement('div')

		containerEl.append(this.createImg())
		containerEl.append(this.createTitleSection())
		containerEl.append(this.createPriceSection())
		containerEl.append(this.createCounterSection())
		containerEl.append(this.createTotalSection())
		this.$el = containerEl
		containerEl.className = this.cssObj.productCard

		return containerEl
	}
}
//-------------------------------------------------------------
window.onload = function () {
	const prod1Data = {
		id: 1,
		title: 'TV',
		imgSrc: 'img/1.jpg',
		price: 200,
		count: 1,
		amount: 5
	}
	const cssObj = {
		img: 'img',
		title: 'title',
		price: 'price',
		totalPrice: 'totalPrice',
		productCard: 'product-card',
	}
	const p1 = new ProductCard(prod1Data, cssObj)
	document.querySelector('#container').append(p1.render())
}




// Урок-20 приклад 2 =========================================================================
// class RangeInput {
// 	constructor(title, minValue, maxValue, cssObj) {
// 		this.title = title
// 		this.minValue = minValue
// 		this.maxValue = maxValue
// 		this.cssObj = cssObj
// 	}
// 	createLabel() {
// 		const labelEl = document.createElement('label')
// 		labelEl.innerText = this.title
// 		return labelEl
// 	}
// 	createInputElement() {
// 		const inpEl = document.createElement('input')
// 		inpEl.type = 'number'
// 		inpEl.onchange = this.onChangeHandler.bind(this)
// 		return inpEl
// 	}
// 	onChangeHandler() {
// 		const value = this.inputEl.value
// 		if (value >= this.minValue && value <= this.maxValue) {
// 			// this.inputEl.className = 'correct'
// 			this.inputEl.className = this.cssObj.correct
// 		}
// 		else {
// 			// this.inputEl.className = 'error'
// 			this.inputEl.className = this.cssObj.error
// 		}
// 	}
// 	set Value(newVal) {
// 		this.inputEl.value = newVal
// 	}
// 	get Value() {
// 		return parseInt(this.inputEl.value)
// 	}
// 	render(targetContainerSelector) {
// 		const elContainer = document.createElement('div')
// 		const labelEl = this.createLabel()
// 		this.inputEl = this.createInputElement()
// 		labelEl.append(this.inputEl)
// 		elContainer.append(labelEl)
// 		if (targetContainerSelector) {
// 			document.querySelector(targetContainerSelector)?.append(elContainer)
// 		}
// 		return elContainer
// 	}
// }
// window.onload = function () {
// 	const cssObj = {
// 		correct: 'correct',
// 		error: 'error'
// 	}
// 	const r1 = new RangeInput('Вік працівника', 18, 65, cssObj)
// 	r1.render('#myContainer')
// 	const r2 = new RangeInput('Вік школяра', 7, 17, cssObj)
// 	r2.render('#myContainer2')

// 	r2.Value = 25

// setTimeout(() => {
// 	alert(r2.value)
// }, 3000);
// }






// Урок-20 приклад 1 =========================================================================
// function createDishElement(dishTitle) {
// 	const dishElement = document.createElement('div')
// 	dishElement.innerText = dishTitle
// 	dishElement.className = 'item'
// 	return dishElement
// }
// function addDish() {
// 	const newDish = document.getElementById('newDish').value
// 	if (newDish) {
// 		const dishElement = createDishElement(newDish)
// 		document.querySelector('.items').append(dishElement)
// 	}
// }

// function onSelect(e) {
// 	const target = e.target
// 	if (target.classList.contains('item')) {
// 		const currentSection = target.closest('.section')
// 		const nextSection = currentSection.nextElementSibling
// 		if (nextSection) {
// 			const targetItemsList = nextSection.querySelector('.items')
// 			targetItemsList.append(target)
// 		} else {
// 			document.querySelector('.history-container').append(target)
// 		}
// 	}
// }
// window.onload = function () {
// 	// dishesList = ['Суп', 'Борщ', 'Катлети', 'Вареники']
// 	document.getElementById('addDishBtn').onclick = addDish
// 	document.querySelector('.restaurant').onclick = onSelect
// }

// }
