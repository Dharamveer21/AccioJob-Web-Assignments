const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (n) => {
    let num = parseInt(n);
    let digitSum = 0, digit = 0;

    while (num > 0) {
        digit = num % 10;
        digitSum = digitSum + digit;
        num = Math.floor(num / 10);
    }

    console.log(digitSum);
});