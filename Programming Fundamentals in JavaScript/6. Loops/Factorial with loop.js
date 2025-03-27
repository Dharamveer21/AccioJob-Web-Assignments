const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', n => {
    readline.close();

    let num = parseInt(n);
    let factorial = 1;

    for (let times = 1; times <= num; times++) {
        factorial = factorial * times;
    }

    console.log(factorial);
});