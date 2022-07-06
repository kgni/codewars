// July 06, 2022

/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway
*/

//PREP

//P - integer (can be negative)
//R - if the last char is a 0 remove that 0 and return the integer without it, if the parameter is just a 0, return 0
function noBoringZeros(n) {
	if (n === 0) return 0;

	// turn number into string, so we can loop over it (type number is not an iterable)

	let nString = n.toString();

	// create while loop checking last char/number of the string if it is a 0, remove it

	while (nString[nString.length - 1] === '0') {
		nString = nString.slice(0, -1);
	}

	// parse back to a number
	return Number(nString);
}
//E -

// using mod checking if the number mod 10 is 0 (meaning that it ends in a 0) - Not good practice to mutate input
function noBoringZeros(n) {
	if (n === 0) return n;

	// checking if n % 10 === 0 (if the number ends in a 0), if yes we keep running the loop
	while (n % 10 == 0 && n != 0) {
		// while n % 10 is 0 we use arithmetic assignment operator, and divide the number by 10
		n /= 10;
	}
	return n;
}
