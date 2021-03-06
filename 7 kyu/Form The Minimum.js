// June 27, 2022

/*
Task
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

Notes:
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
Input >> Output Examples
minValue ({1, 3, 1})  ==> return (13)
Explanation:
(13) is the minimum number could be formed from {1, 3, 1} , Without duplications

minValue({5, 7, 5, 9, 7})  ==> return (579)
Explanation:
(579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
Explanation:
(134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications
*/

//PREP

//P - array of numbers
//R - return the lowest number possible, remove duplicates.

function minValue(values) {
	// remove duplicates from the array, and use sort to sort array ascending ot get the lowest number
	// We should return a number and not an array, so we join the array together and

	return Number([...new Set(values)].sort().join(''));
}

//E -

console.log(minValue([1, 3, 1])); // 13
console.log(minValue([4, 7, 5, 7])); // 457
