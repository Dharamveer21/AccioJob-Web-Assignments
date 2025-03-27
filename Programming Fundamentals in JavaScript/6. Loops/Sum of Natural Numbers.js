const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (N) => {
    let num = parseInt(N);
    let sum = (((num) * (num + 1)) / 2);
    console.log(sum);
    rl.close();
});