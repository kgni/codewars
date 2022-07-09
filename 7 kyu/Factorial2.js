// July 09, 2022

/*
Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial
*/

//PREP

//P - integer, can be 0
//R - the product of consecutive integers

function factorial(n) {
	if (n === 0) return 1;
	let sum = 1;
	// multiply each number from 1 to n (included)
	for (let i = 1; i <= n; i++) {
		sum *= i;
	}
	return sum;
}
//E -

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040
console.log(factorial(17)); // 355687428096000
