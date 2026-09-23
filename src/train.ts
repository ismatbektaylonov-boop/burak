console.log('Hello World')
function getSquareNumbers(arr: number[]) {
	let result = []

	for (let item of arr) {
		console.log(`number:${item}, square: ${item * item}`)
		result.push({ number: item, square: item * item })
	}

	return result
}

console.log(getSquareNumbers([1, 2, 3, 4]))
