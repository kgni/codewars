// June 11, 2022

/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

//PREP

//P - array of intergers, array length is odd. Every number in the array is the same, except 1.
//R - return the single number

function stray(numbers) {
	// loop array, and check if the current element is equal to the next, if not return the element
	// create object
	const obj = {};

	// loop through array and create a key with the number, and how many times it is present

	numbers.forEach((number) => {
		obj[number] ? obj[number]++ : (obj[number] = 1);
	});

	// loop through object and check if the key is equal to 1, if it is, then return the key

	for (key in obj) {
		if (obj[key] === 1) {
      // turn the key into a number, because all cause are strings
			return Number(key);
		}
	}
}

//E -
console.log(stray([1, 1, 2])); // 2


// using max, min and filter to check if it was the max or the min that have the length of 1:
function stray(nums){
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  return nums.filter(x => x == max).length == 1 ? max : min
}