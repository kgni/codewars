// May 06, 2022

/*
In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []
*/

function twoHighest(arr) {
	const uniqueArr = [...new Set(arr)];
	const twoHighest = [];
	if (uniqueArr.length === 0) {
		return [];
	} else if (uniqueArr.length === 1) {
		twoHighest.push(uniqueArr.sort((a, b) => a - b)[uniqueArr.length - 1]);
	} else {
		twoHighest.push(uniqueArr.sort((a, b) => a - b)[uniqueArr.length - 1]);
		twoHighest.push(uniqueArr.sort((a, b) => a - b)[uniqueArr.length - 2]);
	}
	return twoHighest;
}

// Done in one line:

function twoHighest(arr) {
	return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2);
}
