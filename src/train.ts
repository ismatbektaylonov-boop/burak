/*TASK O:

Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin

MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45

Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35
Qolganlari nested bo'lib yoki type'lari number emas.
*/
function calculateSumOfNumbers(input: any[]): number {
	let res = 0
	for (let i = 0; i < input.length; i++) {
		if (typeof input[i] === 'number') {
			res += input[i]
		}
	}
	return res
}

console.log(calculateSumOfNumbers([10, '10', { son: 10 }, true, 35]))

/* Project Standards:
 - Logging standards
 - Naming standards:
    function, method, variable => CAMEL
    class => PASCAL
    folder => KEBAB
    css => SNAKE
 - Error handling
*/
/*
Traditional API
Rest API
GraphQL API
...
*/

/*
TASK N:

Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.

MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false; 
*/
// function palindromCheck(str: string): boolean {
// 	const a: string = str.slice(0, str.length)
// 	const b: string = a.split('').reverse().join('')

// 	// console.log(a, b);

// 	if (a === b) {
// 		return true
// 	} else {
// 		return false
// 	}
// }

// console.log(palindromCheck('dad')) // true
// console.log(palindromCheck('son')) // false

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
