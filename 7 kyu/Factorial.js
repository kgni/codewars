// June 17, 2022

/*
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

More details about factorial can be found here.
*/

//PREP

//P - non-negative integer (can be 0)
//R - return the factorial of the integer

function factorial(n) {
	// if n is below 0, or above 12 throw a RangeError
	if (n < 0 || n > 12) {
		throw RangeError;
	}
	// if n is 0, return 1
	if (n === 0) {
		return 1;
	}

	// initialize our sum to be 1, because we have to do multiplication, and we cannot multiply by 0
	let sum = 1;

	// for loop, looping from n, down to 1, multiplying the sum with the value of i each iteration

	for (let i = n; i >= 1; i--) {
		sum *= i;
	}
	return sum;
}
//E -
