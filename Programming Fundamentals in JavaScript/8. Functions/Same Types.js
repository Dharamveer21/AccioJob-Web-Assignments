function isSameType(value1, value2) {

    if (Number.isNaN(value1) || Number.isNaN(value2)) {
        let areBothNan = (Number.isNaN(value1) && Number.isNaN(value2));
        return (areBothNan);
    }

    let argument1Type = typeof (value1);
    let argument2Type = typeof (value2);

    return (argument1Type === argument2Type);
}

let result = isSameType("4", 3);
console.log(result);