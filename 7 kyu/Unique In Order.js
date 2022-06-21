// June 21, 2022

/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

//PREP

//P - string or array,
//R - an array of items without any elements with the same value next to each other and preserving the original order of elements.

function uniqueInOrder(iterable) {
	// create new empty uniqueList for our new list
	const uniqueList = [];
	// loop through iterable, if the current element is equal to the next element, then skip to next iteration, else add element to uniquelist

	for (let i = 0; i < iterable.length; i++) {
		if (iterable[i] === iterable[i + 1]) {
			continue;
		} else {
			uniqueList.push(iterable[i]);
		}
	}
	return uniqueList;
}
//E -
