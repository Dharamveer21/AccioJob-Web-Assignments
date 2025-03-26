const { parse } = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findBallColor(numberOfBalls) {
    let colorOfTheBall;

    if (numberOfBalls > 0) {
        colorOfTheBall = "blue";
    }
    else {
        colorOfTheBall = "red";
    }

    return colorOfTheBall;
}

function findChamber(ballColor1, ballColor2) {
    let chamberNumber;

    if (ballColor1 === "blue" && ballColor2 === "blue") {
        chamberNumber = 1
    }
    else if (ballColor1 === "red" && ballColor2 === "blue") {
        chamberNumber = 2;
    }
    else if (ballColor1 === "red" && ballColor2 === "red") {
        chamberNumber = 3
    }
    else {
        chamberNumber = 4
    }

    return chamberNumber;
}

rl.on('line', (x) => {
    rl.on('line', (y) => {

        let ballsBox1 = parseInt(x);
        let ballsBox2 = parseInt(y);

        let ballColor1 = findBallColor(ballsBox1);
        let ballColor2 = findBallColor(ballsBox2);

        let chamberNumber = findChamber(ballColor1, ballColor2);
        console.log(chamberNumber);

        rl.close();
    });
});