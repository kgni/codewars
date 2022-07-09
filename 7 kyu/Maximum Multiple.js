// July 09, 2022

/*
Task
Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

Notes
The parameters (divisor, bound) passed to the function are only positive values .
It's guaranteed that a divisor is Found.
*/

//PREP

//P - p1 - integer, p2 - integer (p1 & p2 cannot be negative and they are always above 0)
//R -

function maxMultiple(divisor, bound) {
	// create a loop that loops from bound to 1 (so descending), each iteration check if the iterator is dividable by the divisor, if it is, return the iterator

	for (let i = bound; i > 0; i--) {
		if (i % divisor === 0) {
			return i;
		}
	}
}
//E -
console.log(maxMultiple(2, 7));

// on liner using bound - bound%divisor

function maxMultiple(divisor, bound) {
	return bound - (bound % divisor);
}
