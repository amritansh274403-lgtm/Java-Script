function applyTwice(func, value) {
    let result = func(value);
    result = func(result);

    return result;
}

function addTen(num) {
    return num + 10;
}

console.log(applyTwice(addTen, 5));