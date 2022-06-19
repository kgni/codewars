// June 19, 2022

/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
*/

//PREP

//P -  integer
//R - integer sum of the absolute value of each of the number's decimal digits.
function sumDigits(number) {
	// turn number into string so we can loop over it

	return number
		.toString()
		.split('')
		.map(Number)
		.filter((num) => num)
		.reduce((acc, c) => acc + c, 0);
}

//E -

console.log(sumDigits(10)); // 1
console.log(sumDigits(-32)); // 5

// If we use Math.abs first, we won't need to filter out the NaN
function sumDigits(number) {
	return Math.abs(number)
		.toString()
		.split('')
		.map(Number)
		.reduce((acc, c) => acc + c, 0);
}
