// July 01, 2022

/*
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
*/

//PREP

//P - p1 - array of integers, p2 - integer (target num)
//R - return array (of length 2), with the indexes for the numbers in p1, that when added together will be the target num

function twoSum(nums, target) {
	// create nested for loop, where we are adding the first number in the array with every other number, and for each iteration checking if those to added together are equal to the target.
	// if it is equal to the target, then we want to return [i,j] (the indexes)

	for (let i = 0; i < nums.length; i++) {
		// j starts out with being i+j because we don't want to add the same index with itself.
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j];
			}
		}
	}
}

//E -
