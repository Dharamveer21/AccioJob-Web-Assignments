let input = 8;

// Multiplication table of 8

for (let multiple = 0; multiple < 10; multiple++) {
    let str = `${input} x ${multiple + 1} = ${input * (multiple + 1)}`;
    console.log(str);
}