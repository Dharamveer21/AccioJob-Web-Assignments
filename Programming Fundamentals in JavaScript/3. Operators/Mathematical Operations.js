const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', input => {
    const [a, b] = input.split(' ').map(Number);

    let firstNum = a, secondNum = b;

    let sumVal = (firstNum + secondNum);
    let differenceVal = (firstNum - secondNum);
    let productVal = (firstNum * secondNum);
    let quotientVal = Math.floor(firstNum / secondNum);
    let remainderVal = (firstNum % secondNum);

    console.log(sumVal);
    console.log(differenceVal);
    console.log(productVal);
    console.log(quotientVal);
    console.log(remainderVal);

    readline.close();
});