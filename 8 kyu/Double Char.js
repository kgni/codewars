// March 19, 2022

/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!
*/

function doubleChar(str) {
	let newStr = '';

	for (i in str) {
		newStr += str[i] + str[i];
	}
	return newStr;
}
