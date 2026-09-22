// TASK L:

// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

function reverseSentence(str) {
	const words = str.split(' ')
	let newSentence = ''

	for (let word of words) {
		let reversedWord = word.split('').reverse().join('')
		// Boshlanishida bo'sh joy qo'shilmasligi uchun:
		newSentence = newSentence ? newSentence + ' ' + reversedWord : reversedWord
	}

	return newSentence
}

const result = reverseSentence('we like coding')
console.log(result) // "ew ekil gnidoc"
