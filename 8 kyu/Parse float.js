// May 15, 2022

/*
Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.
*/

//PREP

//P - all possible
//R - number if it is possible to parse input as a float, null if not

function parseF(s) {
	// Parse input as float, if the input parsed in not a number, return null else returned the parsed number.
	return isNaN(parseFloat(s)) ? null : parseFloat(s);
}

//E -

console.log(parseF()); // 1.0

console.log(parseF('Hello')); // null
