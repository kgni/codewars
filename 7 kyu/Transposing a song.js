// May 24, 2022

/*

You are a composer who just wrote an awesome piece of music. Now it's time to present it to a band that will perform your piece, but there's a problem! The singers vocal range doesn't stretch as your piece requires, and you have to transpose the whole piece.

Your task
Given a list of notes (represented as strings) and an interval, output a list of transposed notes in sharp notation.

Input notes may be represented both in flat and sharp notations (more on that below).

For this kata, assume that input is always valid and the song is at least 1 note long.

Assume that interval is an integer between -12 and 12.

Short intro to musical notation
Transposing a single note means shifting its value by a certain interval.

The notes are as following:

A, A#, B, C, C#, D, D#, E, F, F#, G, G#.
This is using sharp notation, where '#' after a note means that it is one step higher than the note. So A# is one step higher than A.

An alternative to sharp notation is the flat notation:

A, Bb, B, C, Db, D, Eb, E, F, Gb, G, Ab.
The 'b' after a note means that it is one step lower than the note.

Examples
['G'] -> 5 steps -> ['C']
['Db'] -> -4 steps -> ['A#']
['E', 'F'] -> 1 step -> ['F', 'F#']
*/

//PREP

//P - P1 = array of notes (string) (can both be sharp and flat), length is always going to be atleast 1 note. P2 setps you want to transpose
//R - return new array with the notes tranposed the amount of steps that P2 had

function transpose(song, interval) {
	// create list of 2 octaves (then we can start in the middle, and both go up and down the scale)

	const nodesArray = [
		'A',
		'A#',
		'B',
		'C',
		'C#',
		'D',
		'D#',
		'E',
		'F',
		'F#',
		'G',
		'G#',
		'A',
		'A#',
		'B',
		'C',
		'C#',
		'D',
		'D#',
		'E',
		'F',
		'F#',
		'G',
		'G#',
		'A',
		'A#',
		'B',
		'C',
		'C#',
		'D',
		'D#',
		'E',
		'F',
		'F#',
		'G',
		'G#',
		'A',
		'A#',
		'B',
		'C',
		'C#',
		'D',
		'D#',
		'E',
		'F',
		'F#',
		'G',
		'G#',
		'A',
		'A#',
		'B',
		'C',
		'C#',
		'D',
		'D#',
		'E',
		'F',
		'F#',
		'G',
		'G#',
	];

	// turn song array into only sharps:

	const songSharp = song.map((el) => {
		if (el === 'Bb') {
			return 'A#';
		} else if (el === 'Db') {
			return 'C#';
		} else if (el === 'Eb') {
			return 'D#';
		} else if (el === 'Gb') {
			return 'F#';
		} else if (el === 'Ab') {
			return 'G#';
		} else {
			return el;
		}
	});

	// find index of the first node in from song array in the nodesArray and add 12 to get an octave higher

	// map over the song index, and assign each element to the value of the node that corresponds to the index + interval in the nodesArray

	return songSharp.map(
		(el) => nodesArray[nodesArray.indexOf(el) + 24 + interval]
	);
}
//E -

console.log(transpose(['A'], 1)); // ['A#']
console.log(transpose(['Bb', 'C#', 'E'], -4)); // ['F#', 'A', 'C']
