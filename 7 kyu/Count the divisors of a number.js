// June 15, 2022

/*
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
*/

//PREP

//P - integer
//R - integer, number of divisors

function getDivisorsCnt(n) {
	// create count for divisors
	let divisors = 0;
	// create for loop, looping from 1 to n (included), checking if it n is divisible by i, if yes add 1 to the counter

	for (let i = 1; i <= n; i++) {
		if (n % i === 0) {
			divisors++;
		}
	}
	return divisors;
}
//E -

console.log(getDivisorsCnt(1)); // 1
console.log(getDivisorsCnt(10)); // 4
console.log(getDivisorsCnt(11)); // 2
console.log(getDivisorsCnt(54)); // 8
