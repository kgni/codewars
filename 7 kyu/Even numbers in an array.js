// June 14, 2022

/*
Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
*/

//PREP

//P - P1 array of integers, P2 integer
//R - Array containing the even numbers of P1, but the array should be of length P2, only containing the last even numbers.

function evenNumbers(array, number) {
	// filter through array, return even numbers. use slice passing in -number, to get an array of the length of number, but only the last elements
	return array.filter((num) => num % 2 === 0).slice(-number);
}
//E -

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // [4,6,8]
