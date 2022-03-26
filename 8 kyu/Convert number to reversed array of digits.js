// March 26, 2022

/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
0 => [0]
*/

function digitize(n) {
	return Array.from(String(n), Number).reverse();
}

// With map and turning the number into a string.

function digitize(n) {
	return n
		.toString()
		.split('')
		.map((el) => Number(el));
}

// Because the .map method loops over every element and does something to them as we parse it to the function,
// we don't actually have to write it out like above, we can just pass in an argument that is 'Number', every element that is is looping over, will be passed into the Number() function that will parse the string to a number.

function digitize(n) {
	return String(n).split('').map(Number).reverse();
}
