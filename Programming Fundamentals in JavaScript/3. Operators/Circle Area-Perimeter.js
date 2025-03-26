const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (radius) => {
    const pi = 3;
    let areaOfCircle = ((pi) * (radius ** 2));
    let perimeterOfCircle = ((2) * (pi) * (radius));

    console.log(areaOfCircle);
    console.log(perimeterOfCircle);
});