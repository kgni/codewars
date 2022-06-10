// June 10, 2022

/*
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/

//PREP

//P - array or null
//R - if argument is null, return empty array, else return sorted array

function solution(nums) {
	// ternary check if nums is equal to null, if true return empty array, if it is not equal to null, then return sorted array (using sort method)
	return nums === null ? [] : nums.sort((a, b) => a - b);
}
