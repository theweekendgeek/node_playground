function test(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);

    let result = a + b

    if (c) {
        result += c
    }

    return result
}


console.log(test(1, 1))
console.log(test(1, 1, 1))

const parameterArray = [1, 1, 1, 1, 1]

console.log(test(...parameterArray))