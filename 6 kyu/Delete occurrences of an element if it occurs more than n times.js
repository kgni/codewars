// July 16, 2022

/*
Enough is enough!
Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

Task
Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].
*/

//PREP

//P - p1 - array of integers, p2 - integer (max number of times an integer can be present)
//R - array where all redundant integers are removed (array should be in the same order)

function deleteNth(arr, n) {
	// create object to keep track of the occurrences of each number
	let obj = {};
	// create array to push numbers into
	let newArr = [];

	// loop through array
	for (const num of arr) {
		// add number to an object for counting, if it the number doesn't exist, we set it to 1, else we add one
		obj[num] = obj[num] ? obj[num] + 1 : 1;
		// check if the count for that number is less than or equal to our second parameter n, if it is, then we push that number to a new array.
		if (obj[num] <= n) {
			newArr.push(num);
		}
	}

	return newArr;
}
//E -

console.log(deleteNth([20, 37, 20, 21], 1)); // [20,37,21]
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); // [1, 1, 3, 3, 7, 2, 2, 2]

// done with fiter:

function deleteNth(arr, x) {
	var cache = {};
	return arr.filter((n) => {
		cache[n] = (cache[n] || 0) + 1;
		return cache[n] <= x;
	});
}
