// May 21, 2022

/*
Task
Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

Notes:
List size is at least 3.

All numbers will be positive.

Numbers could occur more than once , (Duplications may exist).

Threshold K will always be reachable.

Input >> Output Examples
minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
Explanation:
We add two smallest elements (1 + 2), their sum is 3 .

Then we add the next smallest number to it (3 + 3) , so the sum becomes 6 .

Now the result is greater or equal to 6 , Hence the output is (2) i.e (2) operations are required to do this .


*/

//PREP

//P1 - Array of positive integers (array is atleast the length of 3),
//P2 - Positive integer, will always be reachable from adding numbers from P1 together.

function minimumSteps(numbers, value) {
	// reverse numbers array acceding so we always add the smallest numbers first.
	numbers.sort((a, b) => a - b);
	// Have counter for how many operations it will take to reach value argument
	let operations = 0;
	// loop through numbers array adding the current value to the total (accumulator), each time checking if the accumulator is greater than or equal to value

	numbers.reduce((acc, c) => {
		if (acc < value) {
			operations++;
			return acc + c;
		}
	});
	return operations;
}

//R -integer of the numbers of operations (additions) that we would need to make on P1 array to reach the P2 number
//E -
