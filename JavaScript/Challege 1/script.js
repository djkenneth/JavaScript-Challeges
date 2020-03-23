// Age in Days
// birthYear --> 1998
// CurrentYear --> 2020
// Days in a year -- 365 days
// (currentYear - birthYear) * Days in year

function ageInDays() {
    let birthYear = prompt('Year of birth?');
    let date = new Date();
    let currentYear = date.getFullYear();
    let ageInDays = (currentYear - birthYear) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' + ageInDays + ' days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

2 8