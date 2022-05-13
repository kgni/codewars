// May 13, 2022

/*
This is the first step to understanding FizzBuzz.

Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

Your expected output is an array of positive integers from 1 to n (inclusive).

Your job is to write an algorithm that gets you from the input to the output.
*/

// PREP

// P - positive integer, >=1

// R - array of positive integers from 1 to n (inclusive)

function preFizz(n) {
	// have a loop that starts at one, and ends at n (included)
	// push indexes to array after each iteration

	const arr = [];

	for (let i = 1; i <= n; i++) {
		arr.push(i);
	}

	return arr;
}

// E

console.log(preFizz(3)); // [1,2,3]
console.log(preFizz(5)); // [1,2,3,4,5]
console.log(preFizz(10)); // [1,2,3,4,5,6,7,8,9,10]

// Done with creating a new arr with the length of n, and then filling that array with 0's, where we are mapping over each element and setting that value to index+1

function preFizz(n) {
	const arr = new Array(n).fill(0).map((el, index) => index + 1);

	return arr;
}
