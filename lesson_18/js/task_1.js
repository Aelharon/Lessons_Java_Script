"use strict";
if (confirm('Почати тестування?')) {
    function getSum() {
        const num1 = parseFloat(document.querySelector('.calc__input-first-number').value);
        const num2 = parseFloat(document.querySelector('.calc__input-second-number').value);
        const res = num1 + num2;
        document.querySelector('.clcalc__input-result').setAttribute('value', res);
    }
    function getsSubtract() {
        const num1 = parseFloat(document.querySelector('.calc__input-first-number').value);
        const num2 = parseFloat(document.querySelector('.calc__input-second-number').value);
        const res = num1 - num2;
        document.querySelector('.clcalc__input-result').setAttribute('value', res);
    }
    function getsMultiply() {
        const num1 = parseFloat(document.querySelector('.calc__input-first-number').value);
        const num2 = parseFloat(document.querySelector('.calc__input-second-number').value);
        const res = num1 * num2;
        document.querySelector('.clcalc__input-result').setAttribute('value', res);
    }
    function getsDivide() {
        const num1 = parseFloat(document.querySelector('.calc__input-first-number').value);
        const num2 = parseFloat(document.querySelector('.calc__input-second-number').value);
        const res = num1 / num2;
        document.querySelector('.clcalc__input-result').setAttribute('value', res);
    }
    window.onload = function () {
        document.querySelector('.calc__batton-add').onclick = getSum;
        document.querySelector('.calc__batton-subtract').onclick = getsSubtract;
        document.querySelector('.calc__batton-multiply').onclick = getsMultiply;
        document.querySelector('.calc__batton-divide').onclick = getsDivide;
    };
}
