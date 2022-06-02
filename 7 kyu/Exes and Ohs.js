// June 02, 2022

/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

//PREP

//P - string of chars, can be both lower and uppercase
//R - boolean, if the amount of x's and o's are the same in the string. (doesn't matter if they are lowercase or uppercase, a O and o are the same)

function XO(str) {
	// lowercase string
	// create count for x's and o's
	let xCount = 0;
	let oCount = 0;
	// turn string into array, loop through array, if element is equal to x add 1 to xCount, if it is equal to o, add 1 to oCount
	str
		.toLowerCase()
		.split('')
		.forEach((el) => {
			if (el === 'x') {
				xCount++;
			} else if (el === 'o') {
				oCount++;
			}
		});

	return xCount === oCount;
}

//E -

console.log(XO('xo')); // true
console.log(XO('xxOo')); // true

// using .split('') and using x and o as delimiter, to create 2 arrays, then comparing the lenghts
function XO(str) {
	return (
		str.toLowerCase().split('x').length === str.toLowerCase().split('o').length
	);
}

// Using fiter on the string twice, only returning the x's in the first filter, and o's in the 2nd, then taking the length of both and comparing them:
// Not sure if this is a good practice, since we are looping through the string twice.

const XO = (str) => {
	str = str.toLowerCase().split('');
	return (
		str.filter((x) => x === 'x').length === str.filter((x) => x === 'o').length
	);
};
