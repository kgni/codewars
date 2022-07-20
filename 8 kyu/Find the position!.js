// July 20, 2022

/*
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/

//PREP

//P - string - letter
//R - string - "Positon of alphabet: ${position}"

function position(letter) {
	// turn letter into lowercase
	// get the charCodeAt for the letter minus 96 to get a = 1 and so on

	const position = letter.toLowerCase().charCodeAt() - 96;

	return `Position of alphabet: ${position}`;
}
//E -
