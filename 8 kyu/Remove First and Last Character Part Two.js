// April 05, 2022

/*
This is a spin off of my first kata.

You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL
*/

// array methods

function array(str) {
	// if the length of the original string is less than 3, return null

	if (str.length < 3) {
		return null;
	}

	// create new string, splitting each number by ",", remove first and last char and join together with a space between.
	const newStr = str.split(',').slice(1, -1).join(' ');

	// if newStr is an empty string after doing the above, return null
	if (!newStr) return null;

	return newStr;
}

console.log(array('1,2,3'));

// one liner, we don't need to check the length of the original string, because if it is below 3, when we are splitting, slicing and joining, then it will be an empty string,

function array(arr) {
	return arr.split(',').slice(1, -1).join(' ') || null;
}
