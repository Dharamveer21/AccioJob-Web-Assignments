const { time } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findExponent(num1, num2) {
    let product = 1;

    for (let times = 1; times <= num2; times++) {
        product = product * num1;
    }

    return product;
}

rl.on('line', (line) => {
    const [a, b] = line.split(' ').map(Number);
    let power = findExponent(a, b);
    console.log(power);
});