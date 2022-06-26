// June 26, 2022

/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
*/

//PREP

//P - string, with both upper and lowercase chars
//R - the same string, but either all uppercased or all lowercased (depending on how many of the chars were lowercase or uppercase to begin with). We want to make as few changes as possible, if there is the same amount of uppercase and lowercase letters, convert the string to lowercase.
function solve(s) {
	let lowercase = 0;
	let uppercase = 0;

	// split string, loop through and check each char

	s.split('').forEach((char) =>
		char === char.toLowerCase() ? lowercase++ : uppercase++
	);

	// check the amount of uppercase and lowercase letters in the string, make condition based on that.
	return lowercase === uppercase || lowercase > uppercase
		? s.toLowerCase()
		: s.toUpperCase();
}
//E -
console.log(solve('code')); // code
console.log(solve('CODe')); // CODE
console.log(solve('COde')); // code
console.log(solve('Code')); // code
