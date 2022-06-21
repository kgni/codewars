// June 21, 2022

/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!
*/

//PREP

//P - Array of numbers
//R - String in this format "(123) 456-789"

function createPhoneNumber(numbers) {
	numbers.splice(0, 0, '(');
	numbers.splice(4, 0, ')');
	numbers.splice(5, 0, ' ');
	numbers.splice(9, 0, '-');

	return numbers.join('');
}
//E -
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// Using a format string and for loop to loop through the numbers, replacing all x's with those numbers:

function createPhoneNumber(numbers) {
	let format = '(xxx) xxx-xxxx';

	for (let i = 0; i < numbers.length; i++) {
		format = format.replace('x', numbers[i]);
	}

	return format;
}
