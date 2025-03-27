const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkPrime(num) {
    let isPrime = true;
    let squareRootOfNum = Math.floor(Math.sqrt(num));

    for (let factor = 2; factor <= squareRootOfNum; factor++) {
        if (num % factor === 0) {
            isPrime = false;
            break;
        }
    }

    return isPrime;
}

rl.on('line', (n) => {
    let totalNumbers = parseInt(n);

    for (let num = 2; num <= totalNumbers; num++) {
        let isPrime = checkPrime(num);

        if (isPrime === true) {
            console.log(`${num}`);
        }
    }
});