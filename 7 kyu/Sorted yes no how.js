// June 24, 2022

/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/

//PREP

//P - Array, will always be valid (numbers), and there will always be one correct answer (look at the return values)
//R - String - If numbers in array are sorted in ascending order return ("yes, ascending"), descending order: ("yes", descending), else ("no")

function isSortedAndHow(array) {
	// create a copy of the orignal array, sort the copy ascending and descending, and check if equal to the original array (using .every)

	const ascendingArary = Array.from(array).sort((a, b) => a - b);
	const descendinggArary = Array.from(array).sort((a, b) => b - a);

	// check if every element in the 2 newly creating arrays, are equal to the element in the original array
	if (ascendingArary.every((el, index) => el === array[index]))
		return 'yes, ascending';
	if (descendinggArary.every((el, index) => el === array[index]))
		return 'yes, descending';

	return 'no';
}
//E -

console.log(isSortedAndHow([1, 2])); // "yes, ascending"

console.log(isSortedAndHow([15, 7, 3, -8])); // "no, descending"

console.log(isSortedAndHow([4, 2, 30])); // "no"
