const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', n => {
    let res = determineSecondLastDigit(parseInt(n));
    if (res)
        console.log('Yes');
    else
        console.log('No');
    readline.close();
});

function determineSecondLastDigit(n) {
    let lastTwoDigitNumber = (n % 100);
    let secondLastDigit = Math.floor(lastTwoDigitNumber / 10);
    return (secondLastDigit === 0);
}