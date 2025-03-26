const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (n) => {

    let studentMarks = parseInt(n);

    if (studentMarks > 90) {
        console.log("Excellent")
    }
    else if (studentMarks > 80 && studentMarks <= 90) {
        console.log("Good")
    }
    else if (studentMarks > 70 && studentMarks <= 80) {
        console.log("Fair")
    }
    else if (studentMarks > 60 && studentMarks <= 70) {
        console.log("Meets Expectations")
    }
    else {
        console.log("Below Expectations")
    }

    rl.close();
});