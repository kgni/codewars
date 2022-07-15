// July 15, 2022

/*
Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

Example:

solution({a: 1, b: '2'}) // should return "a = 1,b = 2"
*/

//PREP

//P - object
//R - string
function solution(pairs) {
	let str = '';
	// loop through string, and add each key value pair as a string
	for (let key in pairs) {
		str += `${key} = ${pairs[key]},`;
	}
	// remove last comma
	return str.slice(0, -1);
}
//E -

console.log(solution({ a: 1, b: '2' })); // "a = 1, b = 2"
