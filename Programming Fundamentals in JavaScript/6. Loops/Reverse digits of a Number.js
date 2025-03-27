const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', n => {
    let num = parseInt(n);
    let reversedNum = 0;

    while (num > 0) {
        let lastDigit = num % 10;
        reversedNum = reversedNum * 10 + lastDigit;
        num = Math.floor(num / 10);
    }

    console.log(reversedNum);
    readline.close();
});