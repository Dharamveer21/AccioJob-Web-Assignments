const { type } = require('os');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    const [a, b] = input.split(' ').map(Number);

    let typeOfIntegers;

    if ((a % 2 !== 0) && (b % 2 !== 0)) {
        typeOfIntegers = `we are odd`;
    }
    else {
        typeOfIntegers = `we are simple`;
    }

    console.log(typeOfIntegers);

    rl.close();
});