// May 13, 2022

/*
Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

Examples
booleans = [True, True, False], operator = "AND"
True AND True -> True
True AND False -> False
return False
booleans = [True, True, False], operator = "OR"
True OR True -> True
True OR False -> True
return True
booleans = [True, True, False], operator = "XOR"
True XOR True -> False
False XOR False -> False
return False
Input
an array of Boolean values (1 <= array_length <= 50)
a string specifying a logical operator: "AND", "OR", "XOR"
Output
A Boolean value (True or False).
*/

//PREP

//P - First argument, array of booleans - Second argument - string of logical operator ("AND", "OR", "XOR")
//R - Boolean value (true or false)

//E
function logicalCalc(array, op) {
	return array.reduce((prev, curr) => {
		if (op === 'AND') {
			return prev && curr;
		}

		if (op === 'OR') {
			return prev || curr;
		}

		if (op === 'XOR') {
			if ((prev ^ curr) === 1) {
				return true;
			} else {
				return false;
			}
		}
	});
}

// done with an object passed in the reducer:

const ops = {
	AND: (a, b) => a && b,
	OR: (a, b) => a || b,
	XOR: (a, b) => a !== b,
};

function logicalCalc(array, op) {
	return array.reduce(ops[op]);
}

console.log(logicalCalc([true, false], 'AND')); // false
console.log(logicalCalc([true, true], 'AND')); // true
console.log(logicalCalc([true, false], 'OR')); // true
console.log(logicalCalc([false, false], 'OR')); // false
console.log(logicalCalc([true, false], 'XOR')); // false

console.log(logicalCalc([false], 'AND'));
