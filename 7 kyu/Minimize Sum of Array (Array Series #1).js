// May 25, 2022

/*
Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always has even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product , 26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product , 9*0 + 8*2 +7*4 +6*5 = 74
*/

//PREP

//P - Array of integers (positive numbers only)
//R - A positive integer of the minimum sum obtained from summing each Two integers product.

function minSum(arr) {
	// Have a counter to track the sum.
	let sum = 0;
	// Sort array from lowest to highest number (cause we know that the product of the lowest and highest number will always give us the minimum sum in the end)
	arr.sort((a, b) => a - b);

	// Loop through array, multiplying the first and last element each iteration.
	// Because we are using 2 elements each time, we are going to halve the length of the array in our condition.
	for (let i = 0; i < arr.length / 2; i++) {
		sum += arr[i] * arr[arr.length - i - 1];
	}
	return sum;
}
//E -
