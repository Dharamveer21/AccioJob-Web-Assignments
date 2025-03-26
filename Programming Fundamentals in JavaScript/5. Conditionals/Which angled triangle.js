const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sqaureOfSide(side) {
    let sideSquare = (side ** 2);
    return sideSquare;
}

function triangleType(sqaureOfLargestSide, sumOfSqauresOfOtherSides) {

    let triangleTypeValue = 0;

    if (sqaureOfLargestSide < sumOfSqauresOfOtherSides) {
        triangleTypeValue = 1;
    }
    else if (sqaureOfLargestSide === sumOfSqauresOfOtherSides) {
        triangleTypeValue = 2;
    }
    else {
        triangleTypeValue = 3;
    }

    return triangleTypeValue;
}

rl.on('line', (sides) => {

    let [a, b, c] = sides.split(' ');
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);

    let sidesOfTriangle = [a, b, c];
    sidesOfTriangle.sort((x, y) => x - y);

    let otherSide1 = sidesOfTriangle[0];
    let otherSide2 = sidesOfTriangle[1];
    let largestSide = sidesOfTriangle[2];

    let sqaureOfOtherSide1 = sqaureOfSide(otherSide1);
    let sqaureOfOtherSide2 = sqaureOfSide(otherSide2);

    let sqaureOfLargestSide = sqaureOfSide(largestSide);
    let sumOfSqauresOfOtherSides = sqaureOfOtherSide1 + sqaureOfOtherSide2;

    let valueOfTriangle = triangleType(sqaureOfLargestSide, sumOfSqauresOfOtherSides);
    console.log(valueOfTriangle);

    rl.close();
});