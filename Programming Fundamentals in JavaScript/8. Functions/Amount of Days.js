function checkLeapYear(year) {
    let isLeapYear = ((year % 4) === 0);
    let isCenturyYear = ((year % 100) === 0);

    if (isCenturyYear) {
        isLeapYear = ((year % 400) === 0);
    }

    return isLeapYear;
}

function daysOfAYear(year) {
    let isLeapYear = checkLeapYear(year);
    let numberOfDaysInYear = 365;

    if (isLeapYear) {
        numberOfDaysInYear = 366;
    }

    return numberOfDaysInYear;
}