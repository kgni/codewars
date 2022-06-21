// June 21, 2022

/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

//PREP

//P - String where each word contains a number
//R - Return string in the order of the number in the word (starting from index 1)

function order(words) {
	// Create new array which we will use to to rearrange our words (using splice)
	let newArr = [];

	// split string into array, loop over each element using foreach
	words.split(' ').forEach((word) => {
		// Get the index of out the current word (minus 1, because our index in the array starts at 0, but in the string it starts at 1), save it to variable.
		const wordIndex = word.match(/\d+/) - 1;

		// insert the word into the wordIndex position in the array..
		newArr[wordIndex] = word;
	});

	// join the newArr back to a string and return it.
	return newArr.join(' ');
}
//E -

console.log(order('is2 Thi1s T4est 3a')); // "Thi1s is2 3a T4est"
console.log(order('4of Fo1r pe6ople g3ood th5e the2'));

// using sort

function order(words) {
	return words
		.split(' ')
		.sort((a, b) => {
			return a.match(/\d/) - b.match(/\d/);
		})
		.join(' ');
}
