// July 11, 2022

/*
Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

You may assume the input is always valid.

Examples
isPowerOfTwo(1024) // -> true
isPowerOfTwo(4096) // -> true
isPowerOfTwo(333)  // -> false
Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.
*/

//PREP

//P - integer
//R - boolean if p is a power of 2

function isPowerOfTwo(n) {
	// create counter for the while loop

	let counter = 0;

	// create while loop, checking if the power of 2 is going to be equal to n if it is then return true, if the power of 2 is above n, return false
	// keep looping until a condition is met

	while (true) {
		if (2 ** counter > n) {
			return false;
		}

		if (2 ** counter === n) {
			return true;
		}
		counter++;
	}
}
//E -
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(4096)); //true
console.log(isPowerOfTwo(5)); // false
