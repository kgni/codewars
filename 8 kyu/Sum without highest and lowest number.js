// June 13, 2022

/*
Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
*/

//PREP

//P - array of integers, array can be empty, input can be null, nothing etc (false)
//R - return the sum of the array, minus the lowest and biggest number. If input is not an array, is an empty array or only has 1 element, return 0
function sumArray(array) {
	//  check input validations
	if (!array || array.length < 2) {
		return 0;
	}

	// get max and min number

	const max = Math.max(...array);
	const min = Math.min(...array);

	// loop through array and sum everything, minus max and min

	return array.reduce((acc, c) => acc + c) - max - min;
}

//E -
