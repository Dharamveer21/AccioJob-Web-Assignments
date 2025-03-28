const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', n => {
    readline.question('', r => {
        console.log(solve(parseInt(n), parseInt(r)));
        readline.close();
    });
});

function solve(n, r) {
    let num = n, npr = 1;
    
    while (num > (n - r)) {
        npr = npr * num;
        num--;
    }

    return npr;
}