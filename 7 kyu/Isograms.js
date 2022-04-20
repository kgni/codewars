// April 20, 2022

/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/
function isIsogram(str) {
	let newStr = str.toLowerCase();
	let sortedArr = newStr.split('').sort((a, b) => a.localeCompare(b));

	return sortedArr.every((el, index) => {
		if (el === sortedArr[index + 1]) {
			return false;
		} else {
			return true;
		}
	});
}

// Done with set where we are using a Set property of size, to see if a new Set (of unique chars) are the same length as the input. If not, then the input is not an Isogram

function isIsogram(str) {
	return new Set(str.toUpperCase()).size == str.length;
}
