// March 22, 2022

/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/
function positiveSum(arr) {
	let total = 0;

	arr.forEach((el) => {
		if (el > 0) {
			total += el;
		}
	});
	return total;
}

// function positiveSum(arr) {
// 	return arr.reduce((a, b) => {
// 		if (b > 0) {
// 			return a + b;
// 		} else {
// 			return a + 0;
// 		}
// 	}, 0);
// }

// function positiveSum(arr) {
// 	return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
// }
