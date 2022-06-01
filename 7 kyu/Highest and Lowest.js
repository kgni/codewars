// June 01, 2022

/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

//PREP

//P - string of space separated numbers, can be only 1 string
//R - string containing the highest and lowest number separated by a single space (highest number first)

function highAndLow(numbers) {
	// If we want to run Math.max() and Math.min() we need to turn our string into numbers. What we can do is to turn our string of numbers into an array by splitting using a space as our delimiter. Once we have an array, we can then spread the array into Math.max and Math.min, to get the highest and lowest number.

	// Creating array only containing numbers:
	const numberArray = numbers.split(' ').map((el) => Number(el));
	console.log(numberArray);

	// returning a string with the highest number in the array and then the lowest number:

	return `${Math.max(...numberArray)} ${Math.min(...numberArray)}`;
}
//E -

console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'));

// Could also be done this way - without using map (no need to use Number on the elements, cause Math.max() and Math.min() will convert strings automatically):

function highAndLow(numbers) {
	numbers = numbers.split(' ');
	return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
