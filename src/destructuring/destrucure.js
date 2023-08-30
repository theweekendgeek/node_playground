function destrucure({objectProperty}) {
	console.log(objectProperty);
}


destrucure({objectProperty: 1})
destrucure({})
destrucure(1)
destrucure('test')

try {
	destrucure(null)
} catch (e) {
	console.log(e);
}

try {
	destrucure(undefined)
} catch (e) {
	console.log(e);
}

// outside of function signature
const a = undefined

// does not work
// const { b } = a ;

// works
const { b } = a || {}

console.log(b);
