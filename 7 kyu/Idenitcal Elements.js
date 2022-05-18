// May 18, 2022

/*
Given two arrays of integers m and n, test if they contain at least one identical element. Return true if they do; false if not.

Your code must handle any value within the range of a 32-bit integer, and must be capable of handling either array being empty (which is a false result, as there are no duplicated elements).
*/

//PREP

//P - 2 arrays of integer. Can be within the range of a 32-bit integer.
//R - Boolean -true if atleast 1 element is identical, false if not or if one or both of the arrays are empty

function duplicateElements(m, n) {
	// Set a variable starting out as false
	let elementIdentical = false;
	// checking if any of the arrays are empty
	if (m.length === 0 || n.length === 0) false;
	// Loop through both arrays (nested loop) check if outerloop value (first array) is equal to any inner loop value (second array), if it is set variable to true

	for (let i = 0; i < m.length; i++) {
		for (let j = 0; j < n.length; j++) {
			if (m[i] === n[j]) {
				elementIdentical = true;
			}
		}
	}
	return elementIdentical;
}

// Done with some array method

function duplicateElements(m, n) {
	return m.some((num) => n.includes(num));
}
