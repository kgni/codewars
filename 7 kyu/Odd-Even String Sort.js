// July 03, 2022

/*
Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

Note: 
0 is considered to be an even index. 
All input strings are valid with no spaces
input: 'CodeWars'
output 'CdWr oeas'

S[0] = 'C'
S[1] = 'o'
S[2] = 'd'
S[3] = 'e'
S[4] = 'W'
S[5] = 'a'
S[6] = 'r'
S[7] = 's'
Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
odd ones are 1, 3, 5, 7, so the second group is 'oeas'
And the final string to return is 'Cdwr oeas'
*/

//PREP

//P - String (1 word, case sensitive)
//R - String of 2 words, first word is going to be all even chars, 2nd all odd chars

function sortMyString(S) {
	// create 2 empty strings
	let str1 = '';
	let str2 = '';

	// split argument string into array and loop over with foreach, check if the index is equal even or odd, and decide based on that which string the char should be added to.

	S.split('').forEach((char, index) => {
		if (index % 2 === 0) {
			str1 += char;
		} else {
			str2 += char;
		}
	});

	return `${str1} ${str2}`;
}
//E -

console.log(sortMyString('CodeWars'));
console.log(sortMyString("YCOLUE'VREER"));

// with for loop:

function sortMyString(S) {
	// create 2 empty strings
	let str1 = '';
	let str2 = '';

	for (let i = 0; i < S.length; i++) {
		if (i % 2 === 0) {
			str1 += S[i];
		} else {
			str2 += S[i];
		}
	}

	return `${str1} ${str2}`;
}
