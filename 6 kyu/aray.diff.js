// June 04, 2022

/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

//PREP

//P - P1 - array of integers, P2 - array of integers
//R - new array with the elements from P2, removed from P1
function arrayDiff(a, b) {
	// loop through p1 using filter, returning all elements that are not included in p2
	b = b.join(' ');
	return a.filter((el) => a.includes(b));
}

//E -

console.log(arrayDiff([1, 2], [1])); // [2]
console.log(arrayDiff([1, 2, 2], [1])); // [2,2]
console.log(arrayDiff([1, 2, 2], [2])); // [1]
console.log(arrayDiff([1, 2, 3], [1, 2])); // [3]
