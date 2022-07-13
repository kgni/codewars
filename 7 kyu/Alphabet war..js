// July 13, 2022

/*
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.
*/

//PREP

//P - string can be any string, but we only care about a specific amount of letters
//R - string

function alphabetWar(fight) {
	// create counter
	let count = 0;

	// create for loop, looping through each char
	for (let i = 0; i < fight.length; i++) {
		// switch statement for adding or subtracting from counter
		switch (fight[i]) {
			case 'w':
				count -= 4;
				break;
			case 'p':
				count -= 3;
				break;
			case 'b':
				count -= 2;
				break;
			case 's':
				count -= 1;
				break;
			case 'm':
				count += 4;
				break;
			case 'q':
				count += 3;
				break;
			case 'd':
				count += 2;
				break;
			case 'z':
				count += 1;
				break;
		}
	}

	// check if count is 0, less than 0 or greater than 0
	if (count === 0) {
		return "Let's fight again!";
	} else if (count < 0) {
		return 'Left side wins!';
	} else {
		return 'Right side wins!';
	}
}
//E -

console.log(alphabetWar('z'));
console.log(alphabetWar('zdqmwpbs'));
console.log(alphabetWar('zzzzs'));
console.log(alphabetWar('wwwwww'));

// Done with reduce and an object containing the chars with their values:

function alphabetWar(fight) {
	let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
	let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
	return result
		? (result < 0 ? 'Left' : 'Right') + ' side wins!'
		: "Let's fight again!";
}
