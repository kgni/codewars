// June 19, 2022

/*
You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

//PREP

//P - array of strings
//R - string of the first word in the string (after it is sorted), where there are *** between every char

function twoSort(arr) {
	// sort array alphabetically, take first element, split it, and join it with stars
	return arr.sort()[0].split('').join('***');
}
//E -

console.log(
	twoSort([
		'bitcoin',
		'take',
		'over',
		'the',
		'world',
		'maybe',
		'who',
		'knows',
		'perhaps',
	])
); // 'b***i***t***c***o***i***n'
