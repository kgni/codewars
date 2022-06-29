// June 29, 2022

/*
Palindrome strings
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

Examples(Input ==> Output)
"anna"   ==> true
"walter" ==> false
12321    ==> true
123456   ==> false
*/

//PREP

//P - either string or number, if number, convert to a string first, it can include capital letters, punctuation and word dividers
//R - boolean - true if palindrome, false if not
function isPalindrome(line) {
	// turn line into a string
	line = line.toString();
	// create new variable with the line reversed
	let reversedLine = line.split('').reverse().join('');
	// check if the line and the reversed line are the same
	return line === reversedLine;
}

//E -
console.log(isPalindrome('anna')); // true
console.log(isPalindrome('walter')); // false
console.log(isPalindrome(12321)); // true
console.log(isPalindrome(123456)); // false
console.log(isPalindrome('.')); // true
console.log(isPalindrome('.!!.')); // true
