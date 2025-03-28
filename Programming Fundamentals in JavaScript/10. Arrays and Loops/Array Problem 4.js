const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input.push(line);
});

rl.on('close', () => {
    let n = parseInt(input[0]);
    let arrA = input[1].split(' ').map(Number);
    let m = parseInt(input[2]);
    let arrB = input[3].split(' ').map(Number);
    console.log(arrayProblem(arrA, arrB));
});

function findSumOfArray(arr) {
    let arrLen = arr.length, arrSum = 0;

    for (let ind = 0; ind < arrLen; ind++) {
        let num = arr[ind];
        arrSum = arrSum + num;
    }

    return arrSum;
}

function arrayProblem(arrA, arrB) {
    let arrASum = findSumOfArray(arrA);
    let arrBSum = findSumOfArray(arrB);

    if (arrASum > arrBSum) {
        return (`First array is larger`);
    }

    else if (arrASum < arrBSum) {
        return (`Second array is larger`);
    }

    else {
        return (`Both are equal`);
    }
}