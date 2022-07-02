// July 02, 2022

/*
Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

Addendum:

Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well
*/

//PREP

//P - nested array
//R - return array (not nested) with all values sorted
function flattenAndSort(array) {
	// initialize variable with empty array
	let newArr = [];
	// loop through the array twice (one time for each nested array, and 1 time for the elements of each nested array). push the elements to the new array

	array.forEach((arr) => arr.forEach((num) => newArr.push(num)));
	// return the newArr sorted.
	return newArr.sort((a, b) => a - b);
}

//E -

console.log(
	flattenAndSort([
		[3, 2, 1],
		[7, 9, 8],
		[6, 4, 5],
	])
);

// done with concat and spread operator:

function flattenAndSort(array) {
	return [].concat(...array).sort((a, b) => a - b);
}
