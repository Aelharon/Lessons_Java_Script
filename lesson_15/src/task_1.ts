if (confirm('Почати тестування?')) {
	class tir {
		constructor(defArray) {
			this.array = defArray
		}
		targetShot() {
			const shots = this.array.length / 2
			let goodShot = 0
			for (let k = 0; k < shots; k++) {
				let shot = parseInt(prompt(`Ведіть позіцію для пострілу від 0 до ${this.array.length}`, `2`))
				if (this.array[shot] === 1) {
					alert('Влучив')
					this.array[shot] = 0
					goodShot++
				else if (goodShot === shots) break
				}
				else alert('Мимо')
			}
			let res = this.array.every(el => el === 0)
			if (res === true) {
				document.write(`Виграв <br>`)
			} else {
				document.write(`Програв <br>`)
			}
		}
		toString() {
			return `${this.array}`
		}
	}
	function getArray(longArray: number): number[] {
		let r = new Array(longArray).fill(0)
		const targets = r.length / 2 - 1
		for (let i = 0; i <= targets; i++) {
			let target = Math.floor(Math.random() * r.length)
			if (r[target] !== 1) {
				r[target] = 1
			}
		}
		return r
	}
	const row = getArray(10)
	let firstTir = new tir(row)
	console.log(firstTir.array);
	firstTir.targetShot()
	document.write(firstTir)
}