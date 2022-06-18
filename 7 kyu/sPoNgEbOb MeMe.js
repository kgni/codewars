// June 18, 2022

/*
Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?

"Dont use that weird spongebob mocking meme" Me: DonT uSe thAt WeIrd SpoNgEboB MoCkinG MEme

You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

Example:

input:  "stop Making spongebob Memes!"
output: "StOp mAkInG SpOnGeBoB MeMeS!"
*/

//PREP

//P - string (can contain whitespaces, each cahr can either be lower or uppercase)
//R - same string, but sPoNgEbOb cased

function spongeMeme(sentence) {
	// create variable to hold the new sentence
	let newSentence = '';
	// use for loop to loop through sentence
	for (let i = 0; i < sentence.length; i++) {
		// if i is even, uppercase the letter
		if (i % 2 === 0) {
			newSentence += sentence[i].toUpperCase();
		} else {
			// if i is uneven, lowercase the letter
			newSentence += sentence[i].toLowerCase();
		}
	}
	return newSentence;
}
//E -

console.log(spongeMeme('stop Making spongebob Memes!')); // 'StOp mAkInG SpOnGeBoB MeMeS!'
