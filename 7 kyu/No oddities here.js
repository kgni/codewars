// June 19, 2022

/*
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
*/

//PREP

//P - Array of integers
//R - array only of containing even numbers
function noOdds(values) {
	// filter array for even values:

	return values.filter((val) => val % 2 === 0);
}

//E -
