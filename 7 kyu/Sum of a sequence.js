// June 11, 2022

/*
Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

If begin value is greater than the end, function should returns 0

Examples

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)
This is the first kata in the series:

Sum of a sequence (this kata)
Sum of a Sequence [Hard-Core Version]
*/

//PREP

//P - all integers (non negative), p1 is the beginning step, p2 is the end, p3 is the step (inclusive)
//R - return the sum of a sequence of integers - If begin value is greater than the end, function should returns 0

const sequenceSum = (begin, end, step) => {
	// if begin value is greater than end, return 0
	if (begin > end) {
		return 0;
	}
	let sum = 0;
	// create for loop, i starts at the begin param, ends at the end param (inclusive), and is incremented by step after each iteration
	for (let i = begin; i <= end; i += step) {
		// add the value of i to sum after each iteration
		sum += i;
	}
	return sum;
};
//E -

console.log(sequenceSum(2, 6, 2)); // 12
console.log(sequenceSum(1, 5, 1)); // 15
console.log(sequenceSum(1, 5, 3)); // 5
