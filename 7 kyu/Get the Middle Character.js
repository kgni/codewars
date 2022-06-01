// June 01, 2022

/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
*/

//PREP

//P - string of the length 0 < str < 100
//R - if length of the string is odd, return the middle char, if length of the string is even, return the 2 middle chars

function getMiddle(str) {
	// get length of string, divide it by 2 and minus by one, then you have the index for the middle char
	const middleIndex = Math.ceil(str.length / 2);
	// if length of str is uneven return str[middleIndex], if it is even, return str[middleIndex] and str[middleIndex+1]
	console.log(middleIndex);
	return str % 2 ? str[middleIndex] : str[middleIndex] + str[middleIndex + 1];
}
//E -

console.log(getMiddle('test'));
console.log(getMiddle('testing'));
console.log(getMiddle('middle'));
console.log(getMiddle('A'));
