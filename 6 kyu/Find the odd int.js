// June 03, 2022

/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd
*/

//PREP

//P - Array of integers, where one of the integers appears an odd number of times
//R - Integer, the one that appears an odd number of times

function findOdd(arr) {
	// loop through array, and create an object containing each instance of an integer as a key. Then add to that key and you will have the amount of times it appears in the array
	const counts = {};
	for (const num of arr) {
		counts[num] = counts[num] ? counts[num] + 1 : 1;
	}

	// loop through object, using mod on each value to find the key that appeared an odd amount of times. then return the key as a number (because keys are strings)

	for (const key in counts) {
		if (counts[key] % 2 !== 0) {
			return Number(key);
		}
	}
}

//E -

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); // 5
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); // -1
console.log(findOdd([10])); // 10
