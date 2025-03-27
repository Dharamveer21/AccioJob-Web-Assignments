const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', n => {
    let num = parseInt(n), isPrime = true;
    let squareRootOfNum = Math.ceil(Math.sqrt(num));

    for (let factor = 2; factor <= squareRootOfNum; factor++) {
        if (num % factor === 0) {
            isPrime = false;
            break;
        }
    }

    let primeStr = `${num} is a prime number`;
    let notPrimeStr = `${num} is not a prime number`;

    if (num === 1 || isPrime === false) {
        console.log(notPrimeStr);
    }
    else {
        console.log(primeStr);
    }

    readline.close();
});