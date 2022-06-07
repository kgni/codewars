// June 07, 2022

/*

*/

//PREP

//P - String can be of any char
//R - String where all letters in the alphabet is shifted 13 places, if it is not a letter in the  latin/english alphabet, it shouldnt be shifted

function rot13(message) {
	// loop through string, get the charcode for each letter
	// check if the charcode is below the point for the english/latin alphabet, if it is, shift the charcode 13 places and get the new value of the alphabet

	message = message.toLowerCase();

	var result = '';
	var charcode = 0;

	for (var i = 0; i < message.length; i++) {
		charcode = message[i].charCodeAt() + 13;
		result += String.fromCharCode(charcode);
	}
	return result;
}
//E -

console.log(rot13('test')); // grfg
