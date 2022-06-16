// June 16, 2022

/*
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
*/

//PREP

//P - p1 - string (case sensitive) p2 - string (case sensitive)
//R - boolean

function isAnagram(test, original) {
	return (
		// for boths string, do the following: string into lowercase, then into array, sort it, join it and compare the 2 strings.
		test.toLowerCase().split('').sort().join('') ===
		original.toLowerCase().split('').sort().join('')
	);
}
