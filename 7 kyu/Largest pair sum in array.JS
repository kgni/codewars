// July 18, 2022

/*
Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.
*/

//PREP

//P - array of integers
//R - integer, largest pair sum

function largestPairSum(numbers) {
	// sort the numbers in ascending order

	const sumArr = numbers.sort((a, b) => a - b);

	// take the sum of the last two numbers of the sumArr

	return sumArr[sumArr.length - 1] + sumArr[sumArr.length - 2];
}

//E -

console.log(largestPairSum([10, 14, 2, 23, 19])); // 42
console.log(largestPairSum([-100, -29, -24, -19, 19])); // 0
console.log(largestPairSum([1, 2, 3, 4, 6, -1, 2])); // 10
console.log(largestPairSum([-10, -8, -16, -18, -19])); // -18
console.log(
	largestPairSum([
		-14, -24, 11, 19, -15, 79, 0, -95, -30, 69, -73, 57, -37, -39, 39, 48, 72,
		-80, 32, 37, -80, -22, -89, 80, -59, 63, 72, -52, -59, 6, -84, 19, -94, -29,
		52,
	])
); // 159

// could also be done where you sort it descending and take the sum of the first two elements

function largestPairSum(numbers) {
	numbers.sort(function (a, b) {
		return b - a;
	});
	return numbers[0] + numbers[1];
}
