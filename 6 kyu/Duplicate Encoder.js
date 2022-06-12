// June 12, 2022

/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

//PREP

//P - string can have special chars in it, can have spaces
//R - string of ( and ). If a char is present only once in the string, then replace it with ( else with ), cases should be ignored

function duplicateEncode(word) {
	// cases should be ignored, so we turn the string into lowercase
	word = word.toLowerCase();

	// create obj to contain key value pairs, of how many times a key is present in the string
	const obj = {};

	// turn word into array, and loop over it. Add chars to an array and count how many times those chars are present in the array

	word.split('').forEach((char) => {
		obj[char] ? obj[char]++ : (obj[char] = 1);
	});

	// loop over an array of words again, check how many times an element is present, and return either ( or ) depending on how many times that char is present

	return word
		.split('')
		.map((char) => {
			if (obj[char] > 1) {
				return ')';
			} else {
				return '(';
			}
		})
		.join('');
}

//E -

console.log(duplicateEncode('din')); // (((

console.log(duplicateEncode('recede')); // ()()()

console.log(duplicateEncode('Success')); // )())())

// using indexOf and lastindexOf. If indexOf is equal to lastindexOf, then there must only be one of that char, else there are going to be more.
function duplicateEncode(word) {
	return word
		.toLowerCase()
		.split('')
		.map(function (a, i, w) {
			return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')';
		})
		.join('');
}
