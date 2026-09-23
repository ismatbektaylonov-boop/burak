/*
TASK M: 

Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];
*/
function getSquareNumbers(arr) {
	let result = []

	for (let item of arr) {
		console.log(`number:${item}, square: ${item * item}`)
		result.push({ number: item, square: item * item })
	}

	return result
}

console.log(getSquareNumbers([1, 2, 3, 4]))

// TASK L:

// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

// function reverseSentence(str) {
// 	const words = str.split(' ')
// 	let newSentence = ''

// 	for (let word of words) {
// 		let reversedWord = word.split('').reverse().join('')
// 		// Boshlanishida bo'sh joy qo'shilmasligi uchun:
// 		newSentence = newSentence ? newSentence + ' ' + reversedWord : reversedWord
// 	}

// 	return newSentence
// }

// const result = reverseSentence('we like coding')
// console.log(result) // "ew ekil gnidoc"
