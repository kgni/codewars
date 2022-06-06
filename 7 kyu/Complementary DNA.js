// June 06, 2022

/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

//PREP

//P - string of letters all UPPERCASE
//R - string of letters all UPPERCASE

function DNAStrand(dna) {
	// loop through the string, and switch every element to its complementary

	// turn string into array and use .map() to loop through each element

	return (
		dna
			.split('')
			.map((el) => {
				// making the switch of every element to its complemntary using if statements
				if (el === 'A') return 'T';
				if (el === 'T') return 'A';
				if (el === 'C') return 'G';
				if (el === 'G') return 'C';
			})
			// joining array aback to a string again.
			.join('')
	);
}

//E -
console.log(DNAStrand('AAAA')); // "TTTT"
console.log(DNAStrand('ATTGC')); // "TAACG"

// done with an object of pairs, returning the complementary

function DNAStrand(dna) {
	const pairs = { A: 'T', T: 'A', C: 'G', G: 'C' };
	return dna
		.split('')
		.map((el) => {
			return pairs[el];
		})
		.join('');
}
