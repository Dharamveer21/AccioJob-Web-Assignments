const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', tempInCelsius => {

    let tempInFahrenheit = (((tempInCelsius * (9)) / 5) + 32);
    console.log(tempInFahrenheit);

    readline.close();
});