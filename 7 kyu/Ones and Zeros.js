// June 09, 2022

/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.
*/

//PREP

//P - array of 0's and 1's (integers)
//R - integer (converted from the binary value)
const binaryArrayToNumber = (arr) => {
	// we can turn the array into a string, and then use the parseInt() function, where we pass 2 as the radix, which will basically turn a string of binary numbers into a single integer
	return parseInt(arr.join(''), 2);
};
