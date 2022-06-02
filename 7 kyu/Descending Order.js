// June 02, 2022

/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

//PREP

//P - positive integer
//R - that positive integer in descending order (creating the highest number possible)

function descendingOrder(n) {
	// turn integer into array of numbers, each number as its own element.
	// use sort method on array, to sort the array decendingly.
	// Join array, and return new integer

	// Turn integer into a string, because a number is not an iterable object (therefore we can't use .split() on it to turn it into an array.)

	return Number(
		String(n)
			.split('')
			.sort((a, b) => b - a)
			.join('')
	);
}
//E -

console.log(descendingOrder(123456789));
