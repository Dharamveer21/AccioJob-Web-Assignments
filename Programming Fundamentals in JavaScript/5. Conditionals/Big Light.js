const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    const [h1, h2, v1, v2] = input.split(' ').map(Number);

    let gianInitialHeight = h1;
    let suneoInitialHeight = h2;

    let gianHeightIncreaseSpeed = v1;
    let suneoHeightIncreaseSpeed = v2;

    let initalHeightDifference = (gianInitialHeight - suneoInitialHeight);
    let reductionInHeightDifferenceAfterEachSecond = (suneoHeightIncreaseSpeed - gianHeightIncreaseSpeed);

    let canGetEqual = ((initalHeightDifference % reductionInHeightDifferenceAfterEachSecond) === 0);
    console.log(canGetEqual);
});