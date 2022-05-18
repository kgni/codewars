// May 18, 2022

/*
The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output= [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
*/

//PREP

//P - Array of integers (ratings)
//R - Do not mutate orignal array, return new array without the minimum value. If array is empty, return an empty array. Array has to be in same order but with the lowest first occuring element removed

function removeSmallest(numbers) {
	// copy original array to new array
	let newArr = [...numbers];
	// Find lowest integer and find the index of that element when it is first occurring in the array:
	let minElement = Math.min(...numbers);
	let minIndex = newArr.indexOf(minElement);
	// remove the first occurring lowest element.
	newArr.splice(minIndex, 1);
	return newArr;
}

//E -
