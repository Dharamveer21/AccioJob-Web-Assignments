const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function starPatternRowPrint(totalRows, currRow, patternSymbol) {
    // spaces
    for (let col = 1; col <= (2 * (totalRows - currRow)); col++) {
        process.stdout.write(" ");
    }

    // symbols
    for (let col = 1; col <= ((2 * currRow) - 1); col++) {
        process.stdout.write(`${patternSymbol} `);
    }

    console.log();
}

let input = [];
rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {

    let t = Number(input[0]);
    let index = 1;

    while (t > 0) {
        let n = Number(input[index]);
        let patternSymbol = '*';

        let upperPatternLines = Math.ceil(n / 2);
        let lowerPatternLines = Math.floor(n / 2);

        // upperHalf
        for (let row = 1; row <= upperPatternLines; row++) {
            starPatternRowPrint(upperPatternLines, row, patternSymbol);
        }

        // lowerHalf
        for (let row = lowerPatternLines; row >= 1; row--) {
            process.stdout.write("  ");
            starPatternRowPrint(lowerPatternLines, row, patternSymbol);
        }

        t--;
        index++;
    }
});