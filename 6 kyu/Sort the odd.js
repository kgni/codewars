// July 12, 2022

/*
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

//PREP

//P - array of even and odd integers
//R - array where ONLY the odd numbers are sorted ascending, the even numbers should be in their original position.

function sortArray(array) {
	// filter out all the odd numbers into new array, where they are sorted in ascending order (take negative numbers into account)
	const oddNumsSorted = array
		.filter((num) => num % 2 !== 0)
		.sort((a, b) => a - b);
	// map through original array, check if the element is an odd number, if it is, then replace that element with an element from the oddNumsSorted array, and pop the element from the oddNumsSorted array

	// return oddNumsSorted;

	const sortedArray = array.map((num) => {
		// check if number is even or uneven (the reason why we use !== 0 and not 2 % === 1, is because now we are taking negative numbers into account as well )
		if (num % 2 !== 0) {
			// return first element in the array and remove it
			return oddNumsSorted.shift();
		} else {
			return num;
		}
	});

	return sortedArray;
}
//E -
console.log(sortArray([5, 3, 2, 8, 1, 4])); // [1, 3, 2, 8, 5, 4]
console.log(
	sortArray([17, 42, 12, -47, 17, 38, 14, -10, -41, -2, 2, 50, -9, 20]) // [ -47, 42, 12, -41, -9, 38, 14, -10, 17, -2, 2, 50, 17, 20 ]
);

// shorter solution (basically same way of thinking)

function sortArray(array) {
	const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
	return array.map((x) => (x % 2 ? odd.shift() : x));
}
