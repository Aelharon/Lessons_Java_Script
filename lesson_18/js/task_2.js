"use strict";
if (confirm('Почати тестування?')) {
    function convert() {
        const courseDollar = 42;
        const courseEuro = 48;
        const grn = parseFloat(document.getElementById('grn').value);
        const grnToDollar = grn / courseDollar;
        const grnToEuro = grn / courseEuro;
        document.getElementById('dollar').setAttribute('value', grnToDollar);
        document.getElementById('euro').setAttribute('value', grnToEuro);
    }
    window.onload = function () {
        document.querySelector('button').onclick = convert;
    };
}
