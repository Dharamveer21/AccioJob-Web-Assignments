const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', month => {

    let monthNumber = Number(month);

    if (monthNumber === 4 || monthNumber === 6 || monthNumber === 9 || monthNumber === 11) {
        console.log(30);
    }

    else if (monthNumber === 2) {
        console.log(28);
    }

    else {
        console.log(31);
    }

    readline.close();
});