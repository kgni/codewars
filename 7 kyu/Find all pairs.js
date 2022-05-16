// May 16, 2022

/*
You are given array of integers, your task will be to count all pairs in that array and return their count.

Notes:

Array can be empty or contain only one value; in this case return 0
If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
Random tests: maximum array length is 1000, range of values in array is between 0 and 1000
Examples
[1, 2, 5, 6, 5, 2]  -->  2
...because there are 2 pairs: 2 and 5

[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
...because there are 4 pairs: 2, 20, 6 and 2 (again)
*/

//PREP

//P - Array of numbers, can be empty
//R - Return a number - how many pairs of the same number. if array is empty or only contains one number, return 0
function duplicates(array) {
	// sort, and loop through array. if the current number is equal to the next number, then add one to a count, and skip ahead one iteration, because we now already have counted that pair

	let pairs = 0;

	array = array.sort();

	for (let i = 0; i < array.length; i++) {
		if (array[i] === array[i + 1]) {
			pairs++;
			i++;
		}
	}
	return pairs;
}

//E -

console.log(duplicates([1, 2, 5, 6, 5, 2]));
console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]));
console.log(duplicates([0, 0, 0, 0, 0, 0, 0]));
