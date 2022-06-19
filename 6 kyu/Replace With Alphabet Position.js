// June 19, 2022

/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

//PREP

//P - String, can be both uppercase and lowercase chars, can contain special chars
//R - return a string with the numbers of the chars in the alphabeth, with a whitespace between them.

function alphabetPosition(text) {
	//  lowercase string
	const textLowerCase = text.toLowerCase();

	let newText = '';

	// loop through the string, only letters in the alphabet gets added to the newText as their position, else skip

	for (let i = 0; i < textLowerCase.length; i++) {
		// checking if the current char in the iteration is from 1-26 (included), when getting its charcode, which means that it is in the alphabet. If it is, then add that position of the letter to our new string, plus an empty space
		if (
			textLowerCase[i].charCodeAt(0) - 96 > 0 &&
			textLowerCase[i].charCodeAt(0) - 96 < 27
		) {
			newText += textLowerCase[i].charCodeAt(0) - 96 + ' ';
		}
	}
	// trim to remove the last whitespace
	return newText.trim();
}
//E -
console.log(alphabetPosition("The sunset sets at twelve o' clock.")); // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
console.log(alphabetPosition('The narwhal bacons at midnight.')); // "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
