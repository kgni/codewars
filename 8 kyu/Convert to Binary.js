// June 29, 2022

/*
Task Overview
Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

/* to_binary(1)  should return 1 */
/* to_binary(5)   should return 101 */
/*to_binary(11)  should return 1011 */

//PREP

//P - integer
//R - the argument as a binary number

function toBinary(n) {
	return Number(n.toString(2));
}
//E -

console.log(toBinary(1)); // 1
console.log(toBinary(2)); // 10
console.log(toBinary(3)); // 11
console.log(toBinary(5)); // 101
console.log(toBinary(11)); // 1011

// shorter version, using the + operator instead of Number
let toBinary = (n) => +n.toString(2);
