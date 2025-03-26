const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', agentName => {

    let introduction = `Hi my name is Agent ${agentName}`;
    console.log(introduction);

    readline.close();
});