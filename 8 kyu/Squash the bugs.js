// May 05, 2022

/*
Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

There will only be one 'longest' word.
*/

function findLongest(str) {
	let words = str.split(' ');
	let length = 0;

	for (let i = 0; i < words.length; i++) {
		if (words[i].length > length) {
			length = words[i].length;
		}
	}
	return length;
}

// With map and arrow function:

const findLongest = (str) => Math.max(...str.split(' ').map((x) => x.length));
