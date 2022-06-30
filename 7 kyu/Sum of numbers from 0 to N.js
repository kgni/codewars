// June 30, 2022

/*
Description:

We want to generate a function that computes the series starting from 0 and ending until the given number.

Example:
Input:

> 6
Output:

0+1+2+3+4+5+6 = 21

Input:

> -15
Output:

-15<0

Input:

> 0
Output:

0=0
*/

//PREP

//P - integer
//R - return string of the calculations to get the sum, and also return the sum
var SequenceSum = (function () {
	function SequenceSum() {}

	SequenceSum.showSequence = function (count) {
		// check if count i 0
		if (count === 0) {
			return `${count}=${count}`;
		}

		// check if count is below 0

		if (count < 0) {
			return `${count}<0`;
		}

		// create 2 variables, one for keeping track with the addition, and one for the sum
		let addition = '0';
		let sum = 0;
		// create for, looping from 1 to count (included)
		for (let i = 1; i <= count; i++) {
			// creating the string of addition
			addition += `+${i}`;
			// getting the sum
			sum += i;
		}
		return `${addition} = ${sum}`;
	};

	return SequenceSum;
})();
//E -

console.log(SequenceSum.showSequence(6));
console.log(SequenceSum.showSequence(0));
console.log(SequenceSum.showSequence(-15));
