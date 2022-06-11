// June 11, 2022

/*
Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)

findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
*/

//PREP

//P - integer
//R - return the sum (integer) of all the multiples of 3 and 5 in a list where the parameter is the biggest number

function findSum(n) {
	let sum = 0;
	// create for loop, looping from 0 to n (including n)
	for (let i = 0; i <= n; i++) {
		// check if i mod 3 or mod 5 is equal to 0, if it is, add i to sum
		if (i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}
	return sum;
}
//E -
console.log(findSum(5)); // 8
console.log(findSum(10)); // 33
