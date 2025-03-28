const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', n => {
    readline.question('', arr => {
        arr = arr.split(' ').map(Number);
        let ans = ArrayProblem6(n, arr);
        console.log(ans);
        readline.close();
    });
});

function ArrayProblem6(n, arr) {
    let evenIndices = [];

    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 === 0 && arr[i] > 0) {
            evenIndices.push(i);
        }
    }

    if (evenIndices.length < 2) {
        return -1;
    }

    let minDistance = Infinity;
    for (let i = 0; i < evenIndices.length - 1; i++) {
        minDistance = Math.min(minDistance, evenIndices[i + 1] - evenIndices[i]);
    }

    return minDistance;
}