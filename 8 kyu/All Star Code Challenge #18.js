// June 19, 2022

/*
This Kata is intended as a small challenge for my students

All Star Code Challenge #18

Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
Notes:

The first argument can be an empty string
The second string argument will always be of length 1
*/

//PREP

//P - p1 string, p2 string (letter or char) of length one
//R - return integer  of the count of occurrences the 2nd argument is found in the first one.
function strCount(str, letter) {
	// turn p1 into array, filter through check if the char is equal to p2, and then take the length of that array
	return str.split('').filter((char) => char === letter).length;
}
//E -
