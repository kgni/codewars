// March 19, 2022

/*
Task
Given a string str, reverse it omitting all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string
*/

function reverseLetter(str) {
	let arr = str.split('');
	let reversedArr = arr.reverse();
	let reversedStr = reversedArr.join('');
	let newStr = '';

	for (let i = 0; i < reversedStr.length; i++) {
		if (/[a-zA-Z]/.test(reversedStr[i]) === true) {
			newStr += reversedStr[i];
		}
	}

	return newStr;
}
