const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', year => {

    let isLeapYear, yearNum = parseInt(year);
    let isCentuaryYear = ((yearNum % 100) === 0);

    if (isCentuaryYear) {
        isLeapYear = ((yearNum % 400) === 0);
    }
    else {
        isLeapYear = ((yearNum % 4) === 0);
    }

    let isLeap = (isLeapYear + 0);
    console.log(isLeap);

    readline.close();
});