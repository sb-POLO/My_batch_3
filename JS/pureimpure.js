function pure(a, b) {
    return a + b
}

let count = 0;
function impure(a, b) {
    count++;
    if (count % 2 === 1) {
        return a + b;
    }
    else {
        return a - b;
    }
}

let res1 = impure(50, 20);
let res2 = impure(50, 20);
console.log(res1);
console.log(res2)