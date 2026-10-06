/**TASK S:

Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
MASALAN: missingNumber([3, 0, 1]) return 2 */

function missingNumber(arr: number[]): number {
	let sum = 0
	let sum2 = arr.length // n dan boshlaymiz

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i]
		sum2 += i
	}

	return sum2 - sum
}

console.log(missingNumber([0, 1, 3, 2, 5])) // 4
// console.log(missingNumber([3, 0, 1])) // 2

/**TASK R:

Shunday function yozing, u string parametrga ega bo'lsin.
Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

MASALAN: calculate("1 + 3"); return 4;
1 + 3 = 4, shu sababli 4 natijani qaytarmoqda. */

// function calculate(expr: string): number {
// 	return new Function(`return ${expr}`)()
// }

// console.log(calculate('1+3')) // 4
// console.log(calculate('1+3+4')) // 8

/**TASK Q:

Shunday function yozing, u 2 ta parametrga ega bo'lib
birinchisi object, ikkinchisi string bo'lsin.
Agar qabul qilinayotgan ikkinchi string, objectning
biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda */

// function hasProperty(obj: any, prop: string): boolean {
// 	return prop in obj
// }

// console.log(hasProperty({ name: 'BMW', model: 'M3' }, 'model')) // true
// console.log(hasProperty({ name: 'BMW' }, 'age')) // false
/** 
 Traditional FD => BSSR(Adminka) => EJS
 Modern FD 			=> SPA(user) => React
 */

/*TASK P:

Parametr sifatida yagona object qabul qiladigan function yozing.
Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]
*/
// function objectToArray(obj: any) {
// 	let result: any[] = []
// 	for (let key in obj) {
// 		result.push([key, obj[key]])
// 	}
// 	return result
// }
// console.log(objectToArray({ a: 10, b: 20 }))

/*TASK O:

Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin

MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45

Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35
Qolganlari nested bo'lib yoki type'lari number emas.
*/
// function calculateSumOfNumbers(input: any[]): number {
// 	let res = 0
// 	for (let i = 0; i < input.length; i++) {
// 		if (typeof input[i] === 'number') {
// 			res += input[i]
// 		}
// 	}
// 	return res
// }

// console.log(calculateSumOfNumbers([10, '10', { son: 10 }, true, 35]))

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

/*TASK N:

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
