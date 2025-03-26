const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('', n => {
    let [a, b] = n.split(' ');
    a = Number(a);
    b = Number(b);

    let leftHandSideValue = ((a + b) ** 3);
    let rightHandSideValue = ((a ** 3) + (b ** 3) + (3 * (a ** 2) * b) + (3 * a * (b ** 2)));

    let verified = `VERIFIED`;
    let notVerified = `NOT VERIFIED`;

    console.log(leftHandSideValue);
    console.log(rightHandSideValue);

    if (leftHandSideValue === rightHandSideValue) {
        console.log(verified);
    }

    else {
        console.log(notVerified);
    }

    readline.close();
});