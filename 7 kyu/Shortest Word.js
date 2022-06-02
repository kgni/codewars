// June 02, 2022

/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

//PREP

//P - string of words - string will never be empty and always a string (no need to account for different data types)
//R - the length of the shortest word(s)

// THIS SOLUTION IS NOT BEST PRACTICE!!!
// This is not a best practice. This solution will take longer than just comparing the lengths of the strings in one loop. Math.min not only does a loop over the array but constantly checks to make sure each value is a number and does conversions among other things.

function findShort(s) {
	// turn string into array of words (using split(' ') with empty space as delimiter)
	// loop over array (map) return new array with the length of every element.
	// Use Math.min() and spread the array containing the length of the numbers into it.
	return Math.min(...s.split(' ').map((el) => el.length));
}

//E -

console.log(findShort('bitcoin take over the world maybe who knows perhaps')); // 3
console.log(
	findShort(
		'turns out random test cases are easier than writing out basic ones'
	)
); // 3
console.log(findShort("Let's travel abroad shall we")); // 2

// Solution for large strings using for loop to check if the element in the arrays length is smaller than what is currently being stored in our smallest variable
function findShort(s) {
	// turn string into array of words
	let arr = s.split(' ');
	// save first word in the array to a variable, so we can compare this to the length of words in our for loop
	let smallest = arr[0];

	// looping through the array
	for (let i = 1; i < arr.length; i++) {
		if (arr[i].length < smallest.length) {
			smallest = arr[i];
		}
	}
	return smallest.length;
}
