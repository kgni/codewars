// May 22, 2022

/*
You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr.
*/

// Using .some()

function consecutive(arr, a, b) {
  return arr.some((el, index) => {
    return el === a && arr[index+1] === b || el === b && arr[index+1] === a
  })
}

// Using .filter()
function consecutive(arr, a, b) {
	const newArr = arr.filter((el, index) => {
		if (arr[index] === a && arr[index + 1] === b) {
			return el;
		}
		if (arr[index] === b && arr[index + 1] === a) {
			return el;
		}
	});

	return newArr.length > 0;
}

// Using .indexOf and Math.abs()

function consecutive(arr, a, b) {
  return Math.abs(arr.indexOf(a) - arr.indexOf(b)) == 1;
}