"use strict";
if (confirm('Почати тестування?')) {
    function howYears() {
        const currentYear = 2025;
        const userYearBirth = parseInt(document.querySelector('.how-years__input').value);
        const res = currentYear - userYearBirth;
        document.querySelector('.how-years__result').innerText = res;
    }
    window.onload = function () {
        document.querySelector('.how-years__input').onchange = howYears;
    };
}
