// April 29, 2022

/*
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
*/
function gimme(triplet) {
	const max = Math.max(...triplet);
	const min = Math.min(...triplet);

	const maxIndex = triplet.indexOf(max);
	const minIndex = triplet.indexOf(min);

	if (minIndex === 0 && maxIndex === 1) {
		return 2;
	} else if (minIndex === 1 && maxIndex === 2) {
		return 0;
	} else if (minIndex === 2 && maxIndex === 0) {
		return 1;
	} else if (maxIndex === 0 && minIndex === 1) {
		return 2;
	} else if (maxIndex === 1 && minIndex === 2) {
		return 0;
	} else if (maxIndex === 2 && minIndex === 0) {
		return 1;
	}
}

// With for loop:

let gimme = function (inputArray) {
	let index = 0;
	let max = Math.max(...inputArray);
	let min = Math.min(...inputArray);
	for (let i = 0; i < inputArray.length; i++) {
		if (inputArray[i] !== max && inputArray[i] !== min) {
			index = i;
		}
	}
	return index;
};

// With indexOf and sort method... We can do this, because we know there are always going to be exactly 3 elements. So if we sort the array and pick the middle element, and then pass that value as an argument to the indexOf array method, then we will get the indexOf the middle elements value returned. The reason we are using Array.from(a) is to copy the original array, because .sort() is a mutable array method, and we don't want the original to be sorted, because then we wont get the right value returned.

function gimme(a) {
	return a.indexOf(
		Array.from(a).sort(function (a, b) {
			return a - b;
		})[1]
	);
}
