// March 28, 2022

/*
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
*/

function isVow(a) {
	return a.map((x) => {
		if (x === 97) {
			return 'a';
		} else if (x === 101) {
			return 'e';
		} else if (x === 105) {
			return 'i';
		} else if (x === 111) {
			return 'o';
		} else if (x === 117) {
			return 'u';
		} else {
			return x;
		}
	});
}
