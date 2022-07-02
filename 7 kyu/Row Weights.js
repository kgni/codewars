// July 02, 2022

/*
Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
*/

//PREP

//P - array of positive integers, at least 1 item
//R - array of 2 elements (first row and 2nd row)

function rowWeights(array) {
	// initialize variable with an array containing 0,0

	let rows = [0, 0];

	// loop through array, check if the index of the current element is even or uneven, if even add the number to rows[0], if uneven add number to rows[1]

	array.forEach((num, index) => {
		index % 2 === 0 ? (rows[0] += num) : (rows[1] += num);
	});

	return rows;
}
//E -
