// July 15, 2022

/*
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
*/

//PREP

//P - array of integers, can be positives, negatives and zeroes
//R - the maximum product obtained from multiplying 2 adjacent numbers in the array

function adjacentElementsProduct(array) {
	// map over array, and create new array with numbers that are going to be the product of 2 adjacent numbers in the array
	// by using map and the index, we will get an element that is NaN, so we have to take this into account.
	// if the index+1 of the array is undefined, then we just want to return undefined

	const products = array.map((num, index) => {
		if (array[index + 1] === undefined) {
			return;
		} else {
			return num * array[index + 1];
		}
	});

	// filter the products, to only contain numbers

	const productsFiltered = products.filter((num) => typeof num === 'number');
	return Math.max(...productsFiltered);
}
//E -
console.log(adjacentElementsProduct([1, 2, 3]));

// could be done in one line, and instead of filtering out the NaN/undefined, we could just remove it with slice, since it is always going to be the last char.
// The last iteration is always going to be the last element multiplied by undefined, so this is why we can simply just use slice to get rid of the last element which will be NaN.

function adjacentElementsProduct(a) {
	return Math.max(...a.map((x, i) => x * a[i + 1]).slice(0, -1));
}
