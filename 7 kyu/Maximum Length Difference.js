// June 19, 2022

/*
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
input : 2 strings with substrings separated by ,
output: number as a string
*/

//PREP

//P - p1 - array of strings, p2 - array of strings
//R - integer return the maximum length difference between the strings in the 2 arrays

function mxdiflg(a1, a2) {
	// check if any of the arrays are empty, if yes return -1
	if (a1.length === 0 || a2.length === 0) {
		return -1;
	}

	// getting the MaxLength and MinLength of both arrays
	const a1MaxLength = Math.max(...a1.map((el) => el.length));
	const a1MinLength = Math.min(...a1.map((el) => el.length));
	const a2MaxLength = Math.max(...a2.map((el) => el.length));
	const a2MinLength = Math.min(...a2.map((el) => el.length));

	// Getting the 2 possible differences

	const diffOne = Math.abs(a1MaxLength - a2MinLength);
	const diffTwo = Math.abs(a1MinLength - a2MaxLength);

	// returning the max possible length difference

	return Math.max(diffOne, diffTwo);
}
//E -

console.log(
	mxdiflg(
		[
			'hoqq',
			'bbllkw',
			'oox',
			'ejjuyyy',
			'plmiis',
			'xxxzgpsssa',
			'xxwwkktt',
			'znnnnfqknaz',
			'qqquuhii',
			'dvvvwz',
		],
		['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww']
	)
);
