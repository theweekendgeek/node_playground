function test() {
	return Array
		.from(arguments)
		.reduce((acc, val) => acc + val, 0)
}


console.log(test(1, 1))
console.log(test(1, 1, 1))

const parameterArray = [1, 1, 1, 1, 1]

console.log(test(...parameterArray))
