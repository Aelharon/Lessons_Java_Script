"use strict";
// if (confirm('Почати тестування ?')) {

class StorageDB {
	constructor(storageKey) {
		this.storageKey = storageKey
	}
	loadData() {
		if (localStorage.getItem(this.storageKey))
			return JSON.parse(localStorage.getItem(this.storageKey))
		else return []
	}
	saveData(list) {
		localStorage.setItem(this.storageKey, JSON.stringify(list))
	}
	addItem(item) {
		const list = this.loadData()
		list.push(item)
		this.saveData(list)
	}
	deleteItem(id) {
		let list = this.loadData()
		list = list.filter((el) => el.id != id)
		this.saveData(list)
	}
	updateItem(item) {
		const list = this.loadData()
		const elIndex = list.findIndex(el => el.id == item.id)
		list[elIndex] = item
		this.saveData(list)
	}
	getItem(id) {
		const list = this.loadData()
		return list.find((el) => el.id == id)
	}
}

class Manager {
	constructor(storageKey, targetContainerSelector) {
		this.storageKey = storageKey
		this.targetContainerSelector = targetContainerSelector
		this.storageDB = new StorageDB(storageKey)
	}
	createTaskEl(taskObj) {
		const li = document.createElement('li')
		li.innerText = `${taskObj.task}`
		return li
	}
	printTasks() {
		const list = this.storageDB.loadData()
		const targetContainer = document.querySelector(this.targetContainerSelector)
		targetContainer.innerHTML = ''
		for (const task of list) {
			targetContainer.append(this.createTaskEl(task))
		}
	}
	addTask() {
		const task = document.querySelector('.task-body-19__task-input').value
		this.storageDB.addItem({ id: new Date().getTime(), task, })
		this.printTasks()
	}
	userAsk() {
		const list = this.storageDB.loadData()
		if (list.length === 0) return
		let randomNumber = Math.floor(Math.random() * (list.length))
		const ask = confirm(`Задача ${list[randomNumber].task} виконана?`)
		if (ask) {
			this.storageDB.deleteItem(list[randomNumber].id)
			this.printTasks()
		}
	}
	checkInterval() {
		let randomInterval = 3000 + Math.floor(Math.random() * 6000)
		setInterval(() => {
			this.userAsk()
		}, randomInterval)
	}
	init() {
		this.userAsk()
		this.printTasks()
		this.checkInterval()
		document.querySelector('.task-body-19__btn').onclick = this.addTask.bind(this)
	}
}
window.onload = function () {
	const manager = new Manager('tasks', '.task-body-19__list')
	manager.init()
}









// function createTaskEl(taskObj) {
// 	const li = document.createElement('li')
// 	li.innerText = `${taskObj.task}`
// 	return li
// }

// function printTasks(storageKey, targetContainerSelector) {
// 	const list = new StorageDB(storageKey).loadData()
// 	const targetContainer = document.querySelector(targetContainerSelector)
// 	targetContainer.innerHTML = ''
// 	for (const task of list) {
// 		targetContainer.append(createTaskEl(task))
// 	}
// }

// function addTask(storageKey, targetContainerSelector) {
// 	const task = document.querySelector('.task-body-19__task-input').value
// 	new StorageDB(storageKey).addItem({ id: new Date().getTime(), task, })
// 	printTasks(storageKey, targetContainerSelector)
// }
// window.onload = function () {
// 	printTasks('tasks', '.task-body-19__list')

// 	const btn = document.querySelector('.task-body-19__btn')
// 	btn.addEventListener('click', addTask.bind(null, 'tasks', '.task-body-19__list'))
// }




// const m = new StorageDB('tasks')
// m.addItem({
// 	id: 1,
// 	task: 'coffee',
// })
// m.addItem({
// 	id: 2,
// 	task: 'coffee22'
// })
// console.log(m.loadData());
// m.deleteItem(1)
// console.log(m.loadData());




// const task = document.querySelector('.task-body-19__task-input').value
// const li = document.createElement('li')
// const ulList = document.querySelector('.task-body-19__list')
// // li.innerText = task
// // ulList.append(li)
// const btn = document.querySelector('.task-body-19__btn')
// btn.addEventListener('click', newTask)
// }


