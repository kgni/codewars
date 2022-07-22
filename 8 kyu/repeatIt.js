// July 22, 2022

/*
Create a function that takes a string and an integer (n).

The function should return a string that repeats the input string n number of times.

If anything other than a string is passed in you should return "Not a string"

Example
"Hi", 2 --> "HiHi"
1234, 5 --> "Not a string"
*/

//PREP

//P - p1 any value or type, p2 integer
//R - if argument is a string, repeat that string, else return "Not a string"

const repeatIt = (str, n) => {
	return typeof str === 'string' ? str.repeat(n) : 'Not a string';
};
//E -
