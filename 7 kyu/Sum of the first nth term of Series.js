// June 15, 2022

/*
Task:
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/

//PREP

//P - integer
//R - decimal number rounded to 2 decimals
function SeriesSum(n) {
	// create sum
	let sum = 0;

	// create dividend (this will be incremented after each iteration)
	let dividend = 1;
	// create loop, looping as many times as the value of n
	for (let i = 1; i <= n; i++) {
		// adding to sum in each iteration
		sum += 1 / dividend;
		// add 3 to our dividend
		dividend += 3;
	}
	return sum.toFixed(2);
}

//E -

console.log(SeriesSum(0)); // 0.00
console.log(SeriesSum(1)); // 1.00
console.log(SeriesSum(2)); // 1.25
console.log(SeriesSum(3)); // 1.39
console.log(SeriesSum(4)); // 1.49
