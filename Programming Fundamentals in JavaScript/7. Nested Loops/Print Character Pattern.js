const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', (n) => {
    let currChar = 'A', totalLines = parseInt(n);

    for (let row = 1; row <= totalLines; row++) {
        for (let col = 1; col <= row; col++) {
            process.stdout.write(`${currChar}`);
        }

        currChar = String.fromCharCode(currChar.charCodeAt(0) + 1);
        console.log();
    }

    readline.close();
});