// July 24, 2022

/*
Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]
See test cases for more examples.

Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

Good luck!
*/

//PREP

//P -  array of strings,
//R - array of integers, if the index of the current char is equal to the same position in the alphabet, then add one to a counter.

function solve(arr) {
	// loop through array using map
	return arr.map((str) => {
		// split every string into an array, and use filter to filter out the chars where the chars position in the alphabet corresponds to the index+1 in the array.
		return str.split('').filter((char, index) => {
			if (index + 1 === char.toLowerCase().charCodeAt() - 96) {
				return char;
			}
		}).length;
	});
}
//E -

console.log(solve(['abode', 'ABc', 'xyzD'])); // [4,3,1]
