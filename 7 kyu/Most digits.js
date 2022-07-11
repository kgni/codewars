// July 11, 2022

/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

//PREP

//P - array of numbers
//R - return the number with the most digits, if two numbers in the argument array have the same number of digits, return the first on in the array

function findLongest(array) {
	// turn array of numbers into array of strings and take the length of each string. Now you will have the lenghts of each number.
	const digitArray = array.map((num) => num.toString().length);

	// find the the maxDigit.
	const maxDigit = Math.max(...digitArray);
	// find the index of the max digit
	const indexOfMaxDigit = digitArray.indexOf(maxDigit);
	// return the first element in the original array that has the maxDigit

	return array[indexOfMaxDigit];
}
//E -

// done using reduce. Checking if the length of the current element is bigger than the last element.
const findLongest = (l) =>
	l.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a));
