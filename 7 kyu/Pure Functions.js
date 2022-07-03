// July 03, 2022

/*
A function is pure when:

It always return the same value given the same arguments (it doesn't update or depend on out of the scope variables);
Evaluation of the result does not cause side effect (mutations...) or output
Task
You are given a function that is impure, and your job is to purify it. This function must return a new array where each value is itself plus 2 times the "modifier", which is provided as a property of the options object.

Example:

Array = 1, 2, 3
Modifier = 5

Should return = 11, 12, 13
*/

//PREP

//P - p1 - array, p2 - object (with one property - "modifier")
//R - return new array, where each element will have added *2 modifier. The function itself must be a pure function, meaning:
// - It always return the same value give the same arguments (it doesn't update or depend on out of the scope variables)
// - Evaluation fo the result does not cause side effect (mutations..) or output

function solution(arr, options) {
	// loop through original array, using map (here we are creating a new array and not mutating the original). Also we are only using variables in the same scope, not from outside of the functions own scope.
	return arr.map((el) => (el += 2 * options.modifier));
}

//E -
