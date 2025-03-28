const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let t;

rl.on('line', (input) => {
    if (!t) {
        t = parseInt(input);
    } else {
        let ans = binToDec(input);
        console.log(ans);
        t -= 1;
        if (t === 0) {
            rl.close();
        }
    }
});

function binToDec(s) {
    let binaryNumber = String(s);
    let decimalNumber = parseInt(s, 2);

    return decimalNumber;
}