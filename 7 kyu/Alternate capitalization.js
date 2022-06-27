// June 27, 2022

/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!
*/

//PREP

//P - string (all lower case)
//R - return array of 2 elements (strings). The letters that occupy even indexes and odd indexes are capitalized separately

function capitalize(s) {
	let arr = ['', ''];

	// loop through string, add an uppercased letter to the first element in array on every even index of the string and lowercase on an uneven index. Do the opposite for the 2nd element in the array.

	s.split('').forEach((el, index) => {
		if (index % 2 === 0) {
			arr[0] += el.toUpperCase();
			arr[1] += el.toLowerCase();
		} else {
			arr[0] += el.toLowerCase();
			arr[1] += el.toUpperCase();
		}
	});

	return arr;
}
//E -

console.log(capitalize('abcdef'));
