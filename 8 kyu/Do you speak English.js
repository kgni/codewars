// May 13, 2022

/*
Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.

Return value as boolean values, true for the string to contains "English", false for it does not.
*/

// PREP

// P - string, arbitrary length, can be empty
// R - boolean, true/false

function spEng(sentence) {
	// lower case string so casing doesn't matter
	// does string includes "english"

	return sentence.toLowerCase().includes('english');
}

// E

console.log('Hello my name is'); // false
console.log('I know how to speak English'); // true
console.log('my name isEngLISh'); // true
