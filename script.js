'use strict';

document.querySelector('.check').addEventListener('click', function () {
    const age = Number(document.querySelector('.age').value);
    const currentYear = Number(document.querySelector('.currentYear').value);
    const retirementYear = 65 - age;
    const yearOfBirth = currentYear - age
    if (!age || !currentYear) {
        document.querySelector('.message').textContent = "🤦‍♀️ You must fill the age and current Year"
    }
    else if (typeof age !== "number" || typeof currentYear !== 'number') {
        document.querySelector('.message').textContent = "🤦‍♀️ Sorry you can only enter numeric values"
    }
    else {
        document.querySelector('.yob').textContent = yearOfBirth;
        document.querySelector('.ytr').textContent = retirementYear;
        document.querySelector('body').style.background = "#60b347";
    }


})

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.yob').textContent = "xx";
    document.querySelector('.ytr').textContent = "xxxx";
    document.querySelector('.age').value = "";
    document.querySelector('.currentYear').value = "";
    document.querySelector('body').style.background = "#222";
})