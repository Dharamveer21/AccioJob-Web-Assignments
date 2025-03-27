const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', n => {
    n = parseInt(n);
    let evenSum = 0;

    for (let evenNum = 2; evenNum <= n; evenNum += 2) {
        evenSum = evenSum + evenNum;
    }

    console.log(evenSum);
    readline.close();
});