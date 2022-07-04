// July 04, 2022

/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

//PREP

//P - array of numbers, minlength is 3
//R - the unique number

function findUniq(arr) {
	// if we have a unique number, then we know that the indexOf that num is also the lastIndexOf that num
	// so we can use .find on the array, and for each number, we run a check to see if the arr.indexOf(num) is equal to arr.lastIndexOf(num)
	return arr.find((num) => arr.indexOf(num) === arr.lastIndexOf(num));
}

//E -

console.log(findUniq([1, 0, 0])); // 1
console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
console.log(findUniq([3, 10, 3, 3, 3]));

// done with sort and a ternary where we are checking if the first element is equal to the next element. If it is, then we remove the first element, if is not then we return the first element

function findUniq(arr) {
	arr.sort((a, b) => a - b);
	return arr[0] == arr[1] ? arr.pop() : arr[0];
}
