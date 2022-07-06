// July 06, 2022

/*
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
*/

//PREP

//P - integer >0
//R - string

function howMuchILoveYou(nbPetals) {
	// create array containing all possible returns:
	const arr = [
		'I love you',
		'a little',
		'a lot',
		'passionately',
		'madly',
		'not at all',
	];

	// check if nbPetals % arr.length is equal to some number, and decide the outcome based on that

	if (nbPetals % arr.length == 1) {
		return 'I love you';
	} else if (nbPetals % arr.length == 2) {
		return 'a little';
	} else if (nbPetals % arr.length == 3) {
		return 'a lot';
	} else if (nbPetals % arr.length == 4) {
		return 'passionately';
	} else if (nbPetals % arr.length == 5) {
		return 'madly';
	} else {
		return 'not at all';
	}
}
//E -

console.log(howMuchILoveYou(7)); // "I love you"
console.log(howMuchILoveYou(3)); // "a lot"
console.log(howMuchILoveYou(6)); // "not at all"

// refactored:

function howMuchILoveYou(nbPetals) {
	const phrases = [
		'I love you',
		'a little',
		'a lot',
		'passionately',
		'madly',
		'not at all',
	];

	// because the phrases array is 0 indexed, we have to minus the nbPetals by 1 and then mod with the length of the array (this means that when our nbPetals is over the length of the phrases array, we will restart and start at index 0 again)
	return phrases[(nbPetals - 1) % phrases.length];
}
