const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', n => {
    let starsCount = parseInt(n);

    console.log("* ".repeat(starsCount));

    // for (let horizontalStarNum = 1; horizontalStarNum <= starsCount; horizontalStarNum++) {
    //     process.stdout.write("* ");
    // }

    for (let verticalStarNum = 1; verticalStarNum <= starsCount; verticalStarNum++) {
        console.log("*");
    }

    readline.close();
});