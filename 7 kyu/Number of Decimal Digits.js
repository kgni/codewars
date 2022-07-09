// July 09, 2022

/*
Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

All inputs will be valid.
*/

//PREP

//P - integer
//R - integer of how many digits are in the number

function digits(n) {
	// turn number into string, and take the length of that string

	return n.toString().length;
}
//E
console.log(digits(12345)); // 5
