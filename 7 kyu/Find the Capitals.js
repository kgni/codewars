// April 11, 2022

/*
Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

let capitals = function (word) {
	return word
		.split('')
		.map((el, index) => {
			if (el === el.toUpperCase()) {
				return index;
			}
		})
		.filter((el) => el !== undefined)
		.sort((a, b) => a - b);
};
