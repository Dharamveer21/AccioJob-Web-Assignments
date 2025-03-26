const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', n => {

    let inputNum = Number(n);
    let trueStr = `i am young`;
    let falseStr = `i am not young`;

    switch (inputNum) {
        case 28:
            console.log(trueStr);
            break;

        default:
            console.log(falseStr);
    }

    readline.close();
});
