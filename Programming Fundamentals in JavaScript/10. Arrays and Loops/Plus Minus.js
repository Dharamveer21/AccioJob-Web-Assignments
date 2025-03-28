const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', n => {
    readline.question('', arr => {
        arr = arr.split(' ').map(Number);
        printRatios(arr);
        readline.close();
    });
});

function printRatios(arr) {
    let len = arr.length, countZero = 0;
    let countPositive = 0, countNegative = 0;

    for (let ind = 0; ind < len; ind++) {
        let currNum = arr[ind];

        if (currNum < 0)
            countNegative++;

        else if (currNum > 0)
            countPositive++;

        else
            countZero++;
    }

    let positiveRatio = (countPositive / len).toFixed(6);
    let negativeRatio = (countNegative / len).toFixed(6);
    let zeroRatio = (countZero / len).toFixed(6);

    console.log(positiveRatio);
    console.log(negativeRatio);
    console.log(zeroRatio);
}