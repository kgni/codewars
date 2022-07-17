// July 17, 2022

/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

//PREP

//P - String
//R - string split by the camelCase
function solution(string) {
	// create new string
	let str = '';

	// split org string into array, check if the next item is upperCase, if it is add a space + that char else just add the char.

	// OBS! here we are not checking if the first letter is uppercase, if it is then we are dealing with PascalCasing, and not camelCase.
	// If the first letter in the string is uppercase, we would add an empty space as the first thing in our string, which we do not want.
	// The tests in the codewars, does not take this into account though.

	string.split('').forEach((char) => {
		if (char === char.toUpperCase()) {
			str += ' ' + char;
		} else {
			str += char;
		}
	});

	return str;
}

//E -

console.log(solution('camelCasing')); // 'camel Casing'

console.log(solution('camelCasingTest')); // 'camel Casing Test'
