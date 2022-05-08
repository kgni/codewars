// May 08, 2022

/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x) {
	let newArr = x.split(' ');
	let scores = x.split(' ').map((word) => {
		let sum = 0;
		for (let i = 0; i < word.length; i++) {
			sum += word.charCodeAt(i) - 96;
		}
		return sum;
	});

	const indexOfHighestScore = scores.indexOf(Math.max(...scores));
	return newArr[indexOfHighestScore];
}
