document.write(`Задача 1)
Підрахувати скільки було обмінів під час сортування бульбашкою: <br>`)

const arr1: number[] = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100))
document.write(`Дано масив ${arr1}<br><br>`)
// document.write((arr).toString())

function getCounterBallSort(arr1: number[]): number {
	let change: boolean, endIndex: number = arr1.length, counter: number = 0
	do {
		change = false
		for (let i: number = 1; i < endIndex; i++) {
			if (arr1[i - 1] > arr1[i]) {
				const tmp = arr1[i - 1]
				arr1[i - 1] = arr1[i]
				arr1[i] = tmp
				change = true
				counter++
			}
		}
		endIndex--
	} while (change)
	return counter
}

const counterBallSort: number = getCounterBallSort(arr1)
document.write(`1. Обмінів при сортуванні "бульбашкою" було - ${counterBallSort}<hr>`)
//=========================================================================================
document.write(`Задача 2)
Підрахувати скільки було обмінів під час сортування змішуванням: <br>`)

const arr2: number[] = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100))
document.write(`Дано масив ${arr2}<br><br>`)

function getCounterCocktailSort(arr2: number[]): number {
	let counter: number = 0, leftIndex: number = 0, rightIndex: number = (arr2.length - 1)
	while (leftIndex < rightIndex) {
		//--- проходимось зліва-направо
		let changed: boolean = false
		for (let i = leftIndex + 1; i <= rightIndex; i++) {
			if (arr2[i - 1] > arr2[i]) {
				let temp = arr2[i - 1]
				arr2[i - 1] = arr2[i]
				arr2[i] = temp
				changed = true
				counter++
			}
		}
		rightIndex--
		if (changed === false) break
		//---- проходимось справа-наліво
		changed = false
		for (let i = rightIndex; i > leftIndex; i--) {
			if (arr2[i - 1] > arr2[i]) {
				let temp = arr2[i - 1]
				arr2[i - 1] = arr2[i]
				arr2[i] = temp
				changed = true
				counter++
			}
		}
		leftIndex++
		if (changed === false) break
	}
	return counter
}

let counterCocktailSort = getCounterCocktailSort(arr2);
document.write(`2. Обмінів при сортуванні "Змішуванням" було - ${counterCocktailSort} <hr>`)
//==============================================================================================
document.write(`Задача 3)
Підрахувати скільки було обмінів під час сортування включеннями: <br>`)

const arr3: number[] = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100))
document.write(`Дано масив ${arr2}<br><br>`)

function getCounterSelectionSort(arr3: number[]): number {
	const prevLastIndex = arr3.length - 2
	const counter: number = 0
	for (let i = 0; i <= prevLastIndex; i++) {
		let minIndex = i
		//----- пошук індекса мінімального елемента від і-до останнього
		for (let j = i + 1; j < arr3.length; j++) {
			if (arr3[j] < arr3[minIndex]) {
				minIndex = j
			}
		}
		//---- якщо мінімалаьний не у позиції "і" то міняємо місцями
		if (i !== minIndex) {
			let temp = arr3[i]
			arr3[i] = arr[minIndex]
			arr3[minIndex] = temp
			counter++
		}
	}
	return counter
}

let counterSelectionSort = getCounterCocktailSort(arr3);
document.write(`3. Обмінів при сортуванні "включеннями" було - ${counterSelectionSort} <hr>`)
//==============================================================================================
document.write(`Задача 4)
Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць: <br>`)

const arr4: number[] = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
document.write(`Дано масив ${arr4}<br><br>`)

function getStageBubbleSort(arr4: number[]): string {
	let change: boolean, endIndex: number = arr4.length, counter: number = 0, res: string = ''
	do {
		change = false
		for (let i: number = 1; i < endIndex; i++) {
			if (arr4[i - 1] > arr4[i]) {
				const tmp = arr4[i - 1]
				arr4[i - 1] = arr4[i]
				arr4[i] = tmp
				change = true
				counter++
				res += `Сортування бульбашкою етап ${counter} = ${arr4} <br>`
			}
		}
		endIndex--
	} while (change)
	return res
}
let stageBubbleSort = getStageBubbleSort(arr4);
document.write(`${stageBubbleSort} <hr>`)
//----------------------------------------------------------------------------------------------
const arr5: number[] = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
document.write(`Дано масив ${arr5}<br><br>`)

function getStageCocktailSort(arr5: number[]): string {
	let counter: number = 0, leftIndex: number = 0, rightIndex: number = (arr2.length - 1), res: string = ''
	while (leftIndex < rightIndex) {
		//--- проходимось зліва-направо
		let changed: boolean = false
		for (let i = leftIndex + 1; i <= rightIndex; i++) {
			if (arr5[i - 1] > arr5[i]) {
				let temp = arr5[i - 1]
				arr5[i - 1] = arr5[i]
				arr5[i] = temp
				changed = true
				counter++
				res += `Сортування змішуванням етап ${counter} = ${arr4} <br>`
			}
		}
		rightIndex--
		if (changed === false) break
		//---- проходимось справа-наліво
		changed = false
		for (let i = rightIndex; i > leftIndex; i--) {
			if (arr5[i - 1] > arr5[i]) {
				let temp = arr2[i - 1]
				arr5[i - 1] = arr5[i]
				arr5[i] = temp
				changed = true
				counter++
				res += `Сортування змішуванням етап ${counter} = ${arr4} <br>`
			}
		}
		leftIndex++
		if (changed === false) break
	}
	return res
}
let stageCocktailSort = getStageCocktailSort(arr5);
document.write(`${stageCocktailSort} <hr>`)
//------------------------------------------------------------------------------------------------
const arr6: number[] = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
document.write(`Дано масив ${arr6}<br><br>`)

function getStageSelectionSort(arr6: number[]): string {
	const prevLastIndex = arr6.length - 2
	let counter: number = 0
	let res: string = ''
	for (let i = 0; i <= prevLastIndex; i++) {
		let minIndex = i
		//----- пошук індекса мінімального елемента від і-до останнього
		for (let j = i + 1; j < arr6.length; j++) {
			if (arr6[j] < arr6[minIndex]) {
				minIndex = j
			}
		}
		//---- якщо мінімалаьний не у позиції "і" то міняємо місцями
		if (i !== minIndex) {
			let temp = arr6[i]
			arr6[i] = arr6[minIndex]
			arr6[minIndex] = temp
			counter++
			res += `Сортування включеннями етап ${counter} = ${arr6} <br>`
		}
	}
	return res
}
let stageSelectionSort = getStageSelectionSort(arr6);
document.write(`${stageSelectionSort} <hr>`)
//==============================================================================================
document.write(`Задача 5)
Дано масив імен. Застосовуючи відповідне сортування та 
бінарний пошук визначити, чи є у масиві ім’я «Olga» і 
під яким індексом. <br>`)
const names: string[] = [
	"Anna", "Ivan", "Maria", "Sergiy", "Dmytro",
	"Oksana", "Olga", "Natalia", "Andriy", "Kateryna",
	"Viktor", "Yulia", "Oleksandr", "Olena", "Pavlo"
];
document.write(`Дано масив ${names.join(', ')}<br><br>`)
// Сортуємо масив--------------------------------------------------------------
function swap(names: string[], i: number, j: number) {
	let temp = names[i]
	names[i] = names[j]
	names[j] = temp
}
function partition(names: string[], p: number, q: number) {
	let pivot = names[q]
	let i = p - 1
	for (let j = p; j < q; j++) {
		if (names[j] <= pivot) {
			i = i + 1
			swap(names, i, j)
		}
	}
	swap(names, i + 1, q)
	return i + 1
}
function quicksort(names: string[], p: number, q: number) {
	if (p >= q) return
	let i = partition(names, p, q)
	quicksort(names, p, i - 1)
	quicksort(names, i + 1, q)
}
quicksort(names, 0, names.length - 1)
document.write(`Сортований масив ${names.join(', ')}<br><br>`)
//---------------------------------------------------------------------------------
// Шукаємо ім'я в масиві
function getIncludesNameOlga(names: string[], searchName: string): boolean {
	let start = 0
	let end = names.length - 1
	while (start <= end) {
		const middle = Math.floor((start + end) / 2)
		if (names[middle] === searchName) return true
		if (names[middle] < searchName) start = middle + 1
		if (names[middle] > searchName) end = middle - 1
	}
	return false
}
if (getIncludesNameOlga(names, 'Olga')) {
	document.write(`Ім'я 'Olga' є в масиві <br>`)
}
else document.write(`Імені 'Olga' немає в масиві`)
//-------------------------------------------------------------------------------------
// Шукаємо індекс ім'я в масиві
function getIndexNameOlga(names: string[], searchName: string): number {
	let start = 0
	let end = names.length - 1
	while (start <= end) {
		const middle = Math.floor((start + end) / 2)
		if (names[middle] === searchName) return middle
		if (names[middle] < searchName) start = middle + 1
		if (names[middle] > searchName) end = middle - 1
	}
	return -1
}
const indexNameOlga = getIndexNameOlga(names, 'Olga')
if (indexNameOlga !== -1) {
	document.write(`Ім'я 'Olga' в масиві за індексом - ${indexNameOlga} <hr>`)
} else {
	document.write(`Імені 'Olga' немає в масиві<hr>`)
}
//==============================================================================================
document.write(`Задача 6)
Застосовуючи відповідне сортування та бінарний пошук визначити, <br>
чи є у масиві ім’я довжиною 5 символів і під яким індексом. <br>`)

document.write(`Дано масив: ${names.join(', ')}<br><br>`)
/**
 * 
 * @param names {string} Одновимірний масив с переліком імен
 * @param symbols {number} Кількість символів у Імені
 * @returns {number | string} Повертає відповідь чи є ім'я, та номер індексу
 */
function getIncludesNameFiveSymbol(names: string[], symbols: number) {
	let start = 0
	let end = names.length - 1
	// let index:number, 
	while (start <= end) {
		const middle = Math.floor((start + end) / 2)
		if (names[middle].length === symbols) return `Ім'я довжиною ${symbols} символів є, під індексом ${middle}`
		if (names[middle].length < symbols) start = middle + 1
		if (names[middle].length > symbols) end = middle - 1
	}
	return `Ім'я довжиною ${symbols} символів відсутнє`
}
const includesNameFiveSymbol = getIncludesNameFiveSymbol(names, 5)
document.write(`${includesNameFiveSymbol} <hr>`)
//==============================================================================================
document.write(`Задача 7)
Сформувати двовимірний масив (4*8) з номерами днів (описати окремий тип для днів). <br>
Заповнити його випадковим чином. <br>
Підрахувати для кожного рядка кількість неділь. <br>`)

const arrDays: number[][] = Array.from({ length: 4 }, () =>
	Array.from({ length: 8 }, () => 1 + Math.floor(Math.random() * 7)))
arrDays.forEach(row => document.write(`${row} <br>`))

function getSumSundayRows(arr: number[][]): string {
	let res = ``
	for (let i = 0; i < arr.length; i++) {
		let sum = arr[i].reduce((prevSum, day) => day === 7 ? prevSum + 1 : prevSum, 0)
		res += `У рядку ${[i + 1]} - ${sum} неділь <br>`
	}
	return res
}
document.write(`${getSumSundayRows(arrDays)}<hr>`)
