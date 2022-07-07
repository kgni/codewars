// July 06, 2022

/*
Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/

//PREP

//P - string
//R - string with all vowels replaced with '!'

function replace(s) {
	const vowels = 'aeiouAEIOU';

	// split string into array, map over string and check if the current char is included in the vowels string (if yes, then return '!', else return the char)

	return s
		.split('')
		.map((char) => {
			if (vowels.includes(char)) {
				return '!';
			}
			return char;
		})
		.join('');
}
