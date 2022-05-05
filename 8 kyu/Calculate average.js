// May 05, 2022

/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/
function find_average(array) {
	return array.length > 0
		? array.reduce((acc, c) => acc + c) / array.length
		: 0;
}
