const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ModifyName(name) {
    let dialogue = `${name} is a Super Hero`;
    return dialogue;
}

rl.on('line', (name) => {
    console.log(ModifyName(name));
    rl.close();
});