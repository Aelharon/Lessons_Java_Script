"use strict";
// Задача 1.
// Описати масив об'єктів – сайтів розроблених компанією.
let arrSites = [
    {
        nameCompany: 'Ajax',
        ownerCompany: 'GPT',
        sponsors: [
            {
                lastNameSponsor: 'Mask',
                firstNameSponsor: 'Ilon',
                sponsorInvestment: 5000
            },
            {
                lastNameSponsor: 'Баба',
                firstNameSponsor: 'Галя',
                sponsorInvestment: 95000
            },
            {
                lastNameSponsor: 'Tramp',
                firstNameSponsor: 'Donald',
                sponsorInvestment: 2500
            }
        ],
        yearRelease: 2005,
        siteCost: 105000
    },
    {
        nameCompany: 'Ajax',
        ownerCompany: 'GPT',
        sponsors: [
            {
                lastNameSponsor: 'Donald',
                firstNameSponsor: 'Duck',
                sponsorInvestment: 1000
            },
            {
                lastNameSponsor: 'Дід',
                firstNameSponsor: 'Степан',
                sponsorInvestment: 80000
            },
            {
                lastNameSponsor: 'Nikola',
                firstNameSponsor: 'Tesla',
                sponsorInvestment: 750
            }
        ],
        yearRelease: 2008,
        siteCost: 70000
    },
    {
        nameCompany: 'BAK',
        ownerCompany: 'Jackie Chan',
        sponsors: [
            {
                lastNameSponsor: 'Si',
                firstNameSponsor: 'Dzi',
                sponsorInvestment: 50000
            },
            {
                lastNameSponsor: 'Sparrow',
                firstNameSponsor: 'Jack',
                sponsorInvestment: 30000
            },
            {
                lastNameSponsor: 'Mouse',
                firstNameSponsor: 'mickey',
                sponsorInvestment: 25000
            }
        ],
        yearRelease: 2025,
        siteCost: 85000
    }
];
//===================================================
document.write(`1. Загальну вартість усіх сайтів<br>`);
/**
 * Знайти загальну вартість усіх сайтів
 * @param arr {[]} Масив сайтів розроблених компанією
 * @returns {number} Загальна вартість сайтів
 */
function getTotalSum(arr) {
    let sum = arr.reduce((prevSum, el) => { var _a; return (_a = prevSum + el.siteCost) !== null && _a !== void 0 ? _a : 0; }, 0);
    return sum;
}
let totalSum = getTotalSum(arrSites);
document.write(` Загальна вартість = ${totalSum}<hr>`);
//===================================================
document.write(`2. Кількість сайтів, що було зроблено між 2000 та 2009 рр.<br>`);
/**
 * Знайти кількість сайтів, що було зроблено між 2000 та 2009 рр.
 * @param arr {[]} Масив сайтів розроблених компанією
 * @returns {number} Кількість сайтів
 */
function getSitesBetween(arr) {
    let sum = arr.reduce((prevSum, el) => (el.yearRelease > 2000 && el.yearRelease < 2009) ? prevSum + 1 : prevSum, 0);
    return sum;
}
let sitesBetween = getSitesBetween(arrSites);
document.write(`Кількість сайтів = ${sitesBetween}<hr>`);
//===================================================
document.write(`3. Кількість сайтів, де сума спонсорських вкладень була більшою за 100000.<br>`);
function getSumSponsorsMore100000(arr) {
    let res = 0;
    for (const el of arr) {
        let sum = 0;
        for (let i = 0; i < el.sponsors.length; i++) {
            sum += el.sponsors[i].sponsorInvestment;
        }
        if (sum > 100000)
            res++;
    }
    return res;
}
const sumSponsorsMore100000 = getSumSponsorsMore100000(arrSites);
document.write(`Кількість сайтів = ${sumSponsorsMore100000}<hr>`);
//===================================================
document.write(`4. створити загальний список усіх спонсорів 
	(поки можуть повторюватись, просто зібрати усі у масив).<br>`);
/**
 * Загальний список усіх спонсорів
 * @param arr {[]} Масив сайтів розроблених компанією
 * @returns [{}] Масив зі списком спонсорів
 */
function getAllSponsors(arr) {
    let res = [];
    for (const site of arr) {
        for (let i = 0; i < site.sponsors.length; i++) {
            res = [...res, site.sponsors[i]];
        }
    }
    // console.log(res)
    return res;
}
const allSponsors = getAllSponsors(arrSites);
allSponsors.forEach(Array => {
    for (const key in Array) {
        document.write(`
				${key} - ${Array[key]}
				<br>`);
    }
});
document.write(`<hr>`);
// console.log(typeof (allSponsors));
//===================================================
document.write(`5. Знайти рік, коли прибуток був найбільшим.<br>`);
/**
 * Знайти рік, коли прибуток був найбільшим
 * @param arr {[]} Масив сайтів розроблених компанією
 * @returns Рік у якому був максимальний прибуток
 */
function getYearMaxProfit(arr) {
    let maxCost = 0, year = 0;
    for (const el of arrSites) {
        if (el.siteCost > maxCost) {
            maxCost = el.siteCost;
            year = el.yearRelease;
        }
    }
    return `Максимальний прибуток був у - ${year} Вартість - ${maxCost}`;
}
const yearMaxProfit = getYearMaxProfit(arrSites);
document.write(`${yearMaxProfit} <hr>`);
//===================================================
document.write(`6. Упорядкувати список за спаданням прибутку.<br>`);
/**
 * Упорядкувати список за спаданням прибутку
 * @param arr
 * @returns
 */
function getSortListProfit(arr) {
    let profitList = [];
    for (const el of arr) {
        profitList.push(el.siteCost);
    }
    return profitList.sort((a, b) => b - a);
}
const sortListProfit = getSortListProfit(arrSites);
document.write(` ${sortListProfit.join('<br>')}<hr>`);
//===================================================
document.write(`7. Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000.<br>`);
let copyArrSitesLess100000 = [], copyArrSitesMore100000 = [];
for (const el of arrSites) {
    if (el.siteCost < 100000)
        copyArrSitesLess100000 = [...copyArrSitesLess100000, ...[el]];
    else
        copyArrSitesMore100000 = [...copyArrSitesMore100000, ...[el]];
}
console.log(copyArrSitesLess100000);
console.log(copyArrSitesMore100000);
document.write(` Відповідь у консолі <hr>`);
//==========================================================================
