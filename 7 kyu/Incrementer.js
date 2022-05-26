// May 26, 2022

/*
Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).

Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.

Notes:
return an empty array if your array is empty
arrays will only contain numbers so don't worry about checking that
Examples:
[1, 2, 3]  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]

[4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5]
                                       #  9+3 = 12  -->  2
*/

//PREP

//P - array of integers, array can be empty
//R - return an array where each element is incremented by its position (starting at 1), if the incremented element has 2 digits, we only want to return that elements last digit.

function incrementer(nums) {
	// loop over array, increment each element with its index+1 (because we are starting at 1)
	const incrementedArray = nums.map((el, index) => el + index + 1);
	// If an element has more than 1 digit, we want to return that elements last digit.
	// Because a number is not an iterable object, we can't get the length of a number, therefore we have to turn every single element into a string, to check if the length is above 1, if that is the case, then we just want to return the last element from that element.

	return incrementedArray.map((el) => {
		// turning element into string, so we can check for length
		el = el.toString();
		// Only returning last digit if the element has a length greater than 1, else we return element (also we are parsing the strings back to a number)
		return el.length > 1 ? Number(el[el.length - 1]) : Number(el);
	});
}

//E -

console.log(incrementer([4, 6, 9, 1, 3])); // [5, 8, 2, 5, 8]
