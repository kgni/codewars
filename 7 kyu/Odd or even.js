// June 10, 2022

/*
Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
Have fun!
*/

//PREP

//P - Array of integers, can be empty
//R - string "odd" or "even" if the sum is either odd or even. If the string is empty, consider it as 0 (even)

function oddOrEven(array) {
	// loop through array, using reduce to to get the sum of the array, use mod to decide if it is even or odd

	return array.reduce((acc, c) => acc + c, 0) % 2 ? 'odd' : 'even';
}
//E -
