const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function countFreqDigit(n, d) {
    let digitCount = 0;

    while (n > 0) {
        let currDigit = n % 10;
        digitCount = digitCount + ((currDigit === d) ? (1) : (0));
        n = Math.floor(n / 10);
    }

    return digitCount;
}

readline.question('', (input) => {
    const [n, d] = input.split(' ').map(Number);
    console.log(countFreqDigit(n, d));
    readline.close();
});