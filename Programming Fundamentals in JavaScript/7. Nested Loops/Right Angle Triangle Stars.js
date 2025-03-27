const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', (n) => {
    let num = parseInt(n);
    let patternSymbol = '*';

    for (let row = 1; row <= num; row++) {
        // symbols
        for (let col = 1; col <= row; col++) {
            process.stdout.write(`${patternSymbol}`);
        }

        console.log();
    }

    readline.close();
});