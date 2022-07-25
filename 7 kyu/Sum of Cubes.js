// July 25, 2022

/*
Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
*/

//PREP

//P - integer
//R - sum of all the cubed values from 1 to integer (included)

function sumCubes(n) {
	// create sum variable

	let sum = 0;

	// create for loop that loops from 1 to n (included), and adds i cubed to sum on each iteration

	for (let i = 1; i <= n; i++) {
		sum += i ** 3;
	}
	return sum;
}
//E -
