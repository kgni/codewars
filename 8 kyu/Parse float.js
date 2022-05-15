// May 15, 2022

/*
Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.
*/

//PREP

//P - all possible
//R - number if it is possible to parse input as a float, null if not

function parseF(s) {
	s = Number(s);
	if (isNaN(s)) {
		return null;
	} else {
		return Number(s).toFixed(1);
	}
}

//E -

console.log(parseF('1')); // 1.0

console.log(parseF('Hello')); // null
