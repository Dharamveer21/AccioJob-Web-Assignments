const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', (n) => {
    readline.close();
    let totalRows = parseInt(n);

    for (let row = 1; row <= totalRows; row++) {

        let currValue = row + 64;

        for (let col = 1; col <= row; col++) {

            currValue = (currValue === 91) ? (65) : (currValue);
            let currChar = String.fromCharCode(currValue);

            process.stdout.write(`${currChar}`);
            currValue++;
        }

        console.log();
    }
});