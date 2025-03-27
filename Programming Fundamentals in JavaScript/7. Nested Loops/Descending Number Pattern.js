const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (n) => {
    let totalLines = parseInt(n);

    for (let row = 1; row <= totalLines; row++) {
        for (let col = 1; col <= row; col++) {
            let num = row - col + 1;
            process.stdout.write(`${num}`);
        }

        console.log();
    }

    rl.close();
});