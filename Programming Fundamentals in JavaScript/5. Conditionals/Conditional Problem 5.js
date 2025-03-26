const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (n) => {

    let userInput = Number(n);
    let divisible = `Divisible`;
    let notDivisible = `Not divisible`;

    if ((userInput % 6) === 0) {
        console.log(divisible);
    }

    else {
        console.log(notDivisible);
    }
});