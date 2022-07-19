// July 19, 2022

/*
If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice stronger than love :-)

The input will always be in lowercase and never be empty.
*/

//PREP

//P - string
//R - the sum of each strings value

function wordsToMarks(string) {
	// declare sum
	let sum = 0;

	// loop through string and get the value where a is 1, b is 2 etc. This can be done by using charCodeAt

	string.split('').forEach((char) => (sum += char.charCodeAt(0) - 96));
	return sum;
}
//E -
