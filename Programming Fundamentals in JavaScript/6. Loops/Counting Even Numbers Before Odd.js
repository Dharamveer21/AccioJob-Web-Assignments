const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let evenCount = 0;

rl.on('line', (input) => {
    let num = parseInt(input);
    evenCount++;

    if (num % 2 !== 0) {
        console.log(evenCount);
        rl.close();
    }
});
