// June 30, 2022

/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

//PREP

//P - p1 - integer, p2 - integer
//R - return binary string
function addBinary(a, b) {
	// take both integer, sum them, turn it into a binary string
	let sum = a + b;
	return sum.toString(2);
}

//E -

console.log(addBinary(1, 2));
