const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', C => {
    readline.close();

    let tempInCelsius = C;
    let tempInFahrenheit = (((tempInCelsius * (9)) / 5) + 32);

    tempInFahrenheit = tempInFahrenheit.toFixed(6);
    console.log(tempInFahrenheit);
});