// July 13, 2022

/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
*/

//PREP

//P - array of smileys
//R - integer (how many times a smiley face occurs in the array)

function countSmileys(arr) {
	// if array is empty, return 0
	if (arr.length === 0) return 0;

	// create array containing all possible smileyfaces

	const validSmileyFaces = [
		':)',
		':-)',
		':~)',
		';)',
		';-)',
		';~)',
		':D',
		':-D',
		':~D',
		';D',
		';-D',
		';~D',
	];

	// filter through the original array, check if the current element is included in the smileyFaces array:

	const smileyFacesArray = arr.filter((face) =>
		validSmileyFaces.includes(face)
	);

	// return the length of the array containing only valid smiley faces
	return smileyFacesArray.length;
}
//E -

console.log(countSmileys([':D', ':~)', ';~D', ':)']));
console.log(countSmileys([':)', ':(', ':D', ':O', ':;']));
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));
console.log(countSmileys([':~D', ':(', ':oD', ':->', ':D', ':(', ';o(']));
