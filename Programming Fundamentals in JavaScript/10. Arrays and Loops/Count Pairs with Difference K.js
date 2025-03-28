const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (a) => {
    rl.on('line', (b) => {
        const [n, k] = a.split(' ').map(Number);
        arr = b.split(' ').map(Number);
        console.log(Pairs(arr, k));
        rl.close();
    })
});

function Pairs(arr, k) {
    let requiredDiff = k, arrLen = arr.length;
    let pairsWithRequiredDiff = 0;

    for (let ind1 = 0; ind1 < arrLen; ind1++) {
        for (let ind2 = 0; ind2 < arrLen; ind2++) {
            let currDiff = arr[ind1] - arr[ind2];

            if (currDiff === requiredDiff) {
                pairsWithRequiredDiff++;
            }
        }
    }

    return pairsWithRequiredDiff;
}