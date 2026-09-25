/*
TASK N:

Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.

MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false; 
*/
function palindromCheck(str: string): boolean {
	const a: string = str.slice(0, str.length)
	const b: string = a.split('').reverse().join('')

	// console.log(a, b);

	if (a === b) {
		return true
	} else {
		return false
	}
}

console.log(palindromCheck('dad')) // true
console.log(palindromCheck('son')) // false

// function palindromCheck(str: string): boolean {
//   const reversedStr: string = str.split("").reverse().join("");
//   return str === reversedStr;
// }

// console.log(palindromCheck("dad")); // true
// console.log(palindromCheck("son")); // false

// console.log('Hello World')
// function getSquareNumbers(arr: number[]) {
// 	let result = []

// 	for (let item of arr) {
// 		console.log(`number:${item}, square: ${item * item}`)
// 		result.push({ number: item, square: item * item })
// 	}

// 	return result
// }

// console.log(getSquareNumbers([1, 2, 3, 4]))
