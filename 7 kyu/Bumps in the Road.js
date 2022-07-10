// July 10, 2022

/*
Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".
*/

//PREP

//P - string of either _ or n
//R - return "Car Dead" if over 15 n else "Woohoo!"

function bump(x) {
	// turn string into array, run filter on it and count the length of the new array.
	const bumps = x.split('').filter((el) => el === 'n');

	return bumps.length > 15 ? 'Car Dead' : 'Woohoo!';
}
//E -

// one liner where you are splitting by the 'n' instead and taking the length of that

const bump = (x) => (x.split('n').length > 16 ? 'Car Dead' : 'Woohoo!');
