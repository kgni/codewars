// July 01, 2022

/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

//PREP

//P - string (chars can be either upper or lower case)
//R - boolean, if the string contains every single letter in the alphabet (return true, else false)

function isPangram(string) {
	// turn string into lowercase
	string = string.toLowerCase();

	/// create alphabet string for validation
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';

	// clean up input, remove all chars that are not letters
	let cleanedUpString = string
		.split('')
		.filter((char) => char.toLowerCase() !== char.toUpperCase())
		.sort()
		.join('');

	// remove all duplicates
	cleanedUpString = [...new Set(cleanedUpString)].join('');

	return cleanedUpString === alphabet;
}
//E -

console.log(isPangram('The quick brown fox jumps over the lazy dog.'));

// done with .every and includes

function isPangram(string) {
	return 'abcdefghijklmnopqrstuvwxyz'
		.split('')
		.every((letter) => string.toLowerCase().includes(letter));
}
