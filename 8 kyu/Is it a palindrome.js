// March 21, 2022

/*
Write a function that checks if a given string (case insensitive) is a palindrome.
*/

function isPalindrome(x) {
	x = x.toLowerCase();

	return x === x.split('').reverse().join('') ? true : false;
}
