const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', n => {

    let userInput = Number(n);
    let greaterNum = `You entered more`;
    let smallerNum = `You entered less`;

    if (userInput > 1) {
        console.log(greaterNum);
    }

    else {
        console.log(smallerNum);
    }

    readline.close();
});
