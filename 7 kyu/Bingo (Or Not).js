// May 12, 2022

/*
For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array). Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.
*/
function bingo(a) {
	// Creating new array with no duplicates
	const newArr = Array.from(new Set(a));

	// Creating new array, only with the values that can spell "BINGO"
	const bingoArr = newArr.filter((el) => {
		if (
			String.fromCharCode(el + 64) === 'B' ||
			String.fromCharCode(el + 64) === 'I' ||
			String.fromCharCode(el + 64) === 'N' ||
			String.fromCharCode(el + 64) === 'G' ||
			String.fromCharCode(el + 64) === 'O'
		) {
			return el;
		}
	});

	// Getting the sum of the values that spells bingo, if the length is greater than 0, if the bingoArray doesn't have any elements, we just return 'LOSE'

	if (bingoArr.length > 0) {
		const sum = bingoArr.reduce((acc, c) => acc + c);
		// the sum of "BINGO" is 47, so if we have an array with the sum of 47, then we know that we have an array that can spell bingo.
		if (sum === 47) {
			return 'WIN';
		} else {
			return 'LOSE';
		}
	} else {
		return 'LOSE';
	}
}

// Done in one line, with every and includes

const bingo = (array) =>
	[2, 7, 9, 14, 15].every((e) => array.includes(e)) ? 'WIN' : 'LOSE';
