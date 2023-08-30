const a = 'first char should be capitalized'


function capitalize([first, ...rest]) {
	console.log(first);
	console.log(rest);
	return `${first.toUpperCase()}${rest.join('')}`
}

const res = capitalize(a)
console.log(res)
