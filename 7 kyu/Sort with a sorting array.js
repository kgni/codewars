// April 12, 2022

/*
Sort an array according to the indices in another array. It is guaranteed that the two arrays have the same size, and that the sorting array has all the required indices.

initialArray = ['x', 'y', 'z'] sortingArray = [ 1, 2, 0]

sort(initialArray, sortingArray) => ['z', 'x', 'y']

sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']
*/

// With fill and splice
function sort(initialArray, sortingArray) {
	const newArr = Array(initialArray.length);
	newArr.fill(0);

	for (let i = 0; i < initialArray.length; i++) {
		newArr.splice(sortingArray[i], 1, initialArray[i]);
	}

	return newArr;
}

function sort(initialArray, sortingArray) {
	let n = initialArray.length;
	let result = [];
	for (let i = 0; i < n; i++) {
		result[sortingArray[i]] = initialArray[i];
	}
	return result;
}
