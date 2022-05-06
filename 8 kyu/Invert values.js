// May 06, 2022

/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
*/

// Original solution:
function invert(array) {
	return array.map((el) => {
		if (el > 0) {
			return -Math.abs(el);
		} else if (el < 0) {
			return Math.abs(el);
		} else {
			return -el;
		}
	});
}

// Using map and the unary negation operator
function invert(array) {
	return array.map((x) => (x === 0 ? x : -x));
}

// Could also be done like this (without the negation operator) minus minus equals plus

function invert(array) {
	return array.map((i) => 0 - i);
}
