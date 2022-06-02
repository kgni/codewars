// June 02, 2022

/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

//PREP

//P - String
//R - string, where each letter is separated by a dash (-) and each letter is repeated the amount of its index (the first repitition is Uppercase)

function accum(s) {
	// turn string into array (split())
	// map over array - for each element, uppercase that element, and concatenate the element repeated as many times as the index.
	// Lastly join together the array, with a dash as the delimiter.
	return s
		.split('')
		.map((el, index) => el.toUpperCase() + el.repeat(index).toLowerCase())
		.join('-');
}

//E -

console.log(accum('ZpglnRxqenU'));
