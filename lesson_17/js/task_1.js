"use strict";
if (confirm('Почати тестування?')) {
    class Test {
        constructor(numbersList) {
            this.numbersList = numbersList;
        }
        getSumAdditional() {
            Test.sumAdditional = this.numbersList.reduce((prevSum, el) => el > 0 ? prevSum + 1 : prevSum, 0);
        }
        getSumNegatives() {
            Test.sumNegatives = this.numbersList.reduce((prevSum, el) => el < 0 ? prevSum + 1 : prevSum, 0);
        }
        getSumNumberTwo() {
            Test.sumNumberTwo = this.numbersList.reduce((prevSum, el) => el === 2 ? prevSum + 1 : prevSum, 0);
        }
        toString() {
            return `Кількість додатних - ${Test.sumAdditional}<br>
				Кількість від’ємних - ${Test.sumNegatives} <br>
				Кількість входжень числа "2" - ${Test.sumNumberTwo}<br>`;
        }
        run() {
            this.getSumAdditional();
            this.getSumNegatives();
            this.getSumNumberTwo();
        }
    }
    Test.sumAdditional = 0;
    Test.sumNegatives = 0;
    Test.sumNumberTwo = 0;
    const test1 = new Test([2, 5, 10, -13, 4, 2, -20, -3, 8, 95, 45, 2, -17, 78, -84, 2]);
    test1.run();
    document.write(test1.toString());
}
