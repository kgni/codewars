// June 13, 2022

/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/

//PREP

//P - positive integer
//R - multiplicative persistence (the number of times yuo must multiply the digits in num until you reach a single digit)

function persistence(num) {
	// create loop, where each number in num, is multiplied together.
	// have counter for how many times the loop has run
	// have sum to keep track of the sum of the multiplicative persistance (this will be used in every loop).
	// when the sum of the multiplicative persistance is a single digit number, stop the loop, and return the counter

	let counter = 0;
	// to get the sum we have to turn the num into a string so we can create an array of each number

	// getting the initial sum of the number, where each number in the num is multiplied by each other.

	let sum = num
		// because a number is not an iterable, we turn the umber into a string first,
		.toString()
		// then we split to get each numbers standalone
		.split('')
		// use map and +operator to turn each element back into a number
		.map((el) => +el)
		// use reduce to get the sum of all numbers multiplied
		.reduce((acc, c) => acc * c);

	// checking if the length of num is greater than 0, and if it includes a 0,if that is true, return 1
	if (num.toString().length > 1 && num.toString().includes('0')) {
		return 1;
	}
	// if the initial sum is a single digit, return 0
	if (sum < 10) {
		return 0;
	}

	counter++;
	// creating while loop, that will run if sum is greater than 10 (greater than a single digit)
	while (sum > 9) {
		// add one to counter
		counter++;
		// set new sum to old sum, where we are splitting the number so we can loop over each number and multiply them together
		sum = sum

			.toString()
			.split('')
			.map((el) => +el)
			.reduce((acc, c) => acc * c);
	}

	return counter;
}

//E -

console.log(persistence(39)); // 3
console.log(persistence(4)); // 0

// shorter solution

function persistence(num) {
	let times = 0;

	num = num.toString();

	while (num.length > 1) {
		times++;
		num = num
			.split('')
			.map(Number)
			.reduce((a, b) => a * b)
			.toString();
	}

	return times;
}
