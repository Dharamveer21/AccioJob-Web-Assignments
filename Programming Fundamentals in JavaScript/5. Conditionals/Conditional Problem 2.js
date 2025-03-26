const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {

    let userInput = Number(input);
    let less30Output = `less important`;
    let notLess30Output = `more important`;

    if (userInput < 30) {
        console.log(less30Output);
    }

    else {
        console.log(notLess30Output);
    }

    rl.close();
});